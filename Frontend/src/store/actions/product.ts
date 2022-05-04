import { useProductService } from 'app/services';
import { SAVE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, IS_LOADING_PRODUCT, LOAD_PAGE_PRODUCT } from './actionTypes';
import { messageError, messageSucess } from './../../components/common/toastr/index';
import { Product } from 'app/models/product';

let returnValue = false;

export const SaveProduct = (product: Product) => {
  const productService = useProductService();

  //remove attribute unnecessary
  delete product.id;
  product.productionDate = new Date(product.productionDate).toISOString();
  if (product.expirationDate == '') product.expirationDate = null;

  console.log(product);

  return async (dispatch) => {
    dispatch(isLoading(true));
    console.log(product);
    await productService
      .save(product)
      .then((res) => {
        product.id = Number.parseInt(res.location.split('/')[4]);
        dispatch({ type: SAVE_PRODUCT, payload: product });
        messageSucess('Salvo com sucesso');
        returnValue = true;
      })
      .catch((err) => {
        dispatch(isLoading(false));
        setError(err);
      });
    dispatch(isLoading(false));
    return returnValue;
  };
};

export const UpdateProduct = (product: Product) => {
  const productService = useProductService();
  return async (dispatch) => {
    dispatch(isLoading(true));
    await productService
      .update(product)
      .then(() => {
        dispatch({ type: UPDATE_PRODUCT, payload: product });
        messageSucess('Alterado com sucesso');
        returnValue = true;
      })
      .catch((err) => {
        dispatch(isLoading(false));
        setError(err);
      });
    dispatch(isLoading(false));
    return returnValue;
  };
};

export const DeleteProduct = (id) => {
  const productService = useProductService();
  return async (dispatch) => {
    dispatch(isLoading(true));
    productService
      .deleteProduct(id)
      .then(() => {
        dispatch({ type: DELETE_PRODUCT, payload: id });
        returnValue = true;
      })
      .catch((err) => {
        dispatch(isLoading(false));
        setError(err);
      });
    dispatch(isLoading(false));
    return returnValue;
  };
};

export const LoadPageProduct = () => {
  const productService = useProductService();

  return async (dispatch) => {
    dispatch(isLoading(true));
    await productService
      .loadPageProduct()
      .then((res) => {
        dispatch({ type: LOAD_PAGE_PRODUCT, payload: res });
      })
      .catch((err) => {
        dispatch(isLoading(false));
        setError(err);
      });
    dispatch(isLoading(false));
  };
};

const isLoading = (value: boolean) => {
  return { type: IS_LOADING_PRODUCT, payload: value };
};

function setError(err) {
  if (String(err.message).includes('Network Error')) {
    messageError('Não foi possivel conectar com servidor.');
  } else {
    messageError(err.response.data.message);
  }
}
