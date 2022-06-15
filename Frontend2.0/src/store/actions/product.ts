import { useProductService } from 'app/services';
import {
  SAVE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  IS_LOADING_PRODUCT,
  LOAD_PAGE_PRODUCT,
  RESET_PAGE_PRODUCT,
} from './actionTypes';
import { messageError } from './../../components/common/toastr/index';
import { Product } from 'app/models/product';

let returnValue = false;

export const SaveProduct = (product: Product) => {
  const productService = useProductService();

  //remove attribute unnecessary
  delete product.id;

  //format date
  product.productionDate = new Date(product.productionDate).toISOString();
  if (product.expirationDate == '') {
    product.expirationDate = null;
  } else product.expirationDate = new Date(product.expirationDate).toISOString();
  if (product.perishableProduct == false) delete product.expirationDate;

  return async (dispatch) => {
    dispatch(isLoading(true));

    await productService
      .save(product)
      .then((res) => {
        product.id = Number(res.id);
        dispatch({ type: SAVE_PRODUCT, payload: product });
        returnValue = true;
      })
      .catch((err) => {
        dispatch(isLoading(false));
        setError(err);
        product.expirationDate = '';
        returnValue = false;
      });
    dispatch(isLoading(false));
    return returnValue;
  };
};

export const UpdateProduct = (product: Product) => {
  const productService = useProductService();

  //format date
  product.productionDate = new Date(product.productionDate).toISOString();
  if (product.expirationDate == '') {
    product.expirationDate = null;
  } else product.expirationDate = new Date(product.expirationDate).toISOString();
  if (product.perishableProduct == false) delete product.expirationDate;

  return async (dispatch) => {
    dispatch(isLoading(true));
    await productService
      .update(product)
      .then(() => {
        dispatch({ type: UPDATE_PRODUCT, payload: product });
        returnValue = true;
      })
      .catch((err) => {
        dispatch(isLoading(false));
        setError(err);
        product.expirationDate = '';
        returnValue = false;
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
        returnValue = false;
      });
    dispatch(isLoading(false));
    return returnValue;
  };
};

export const LoadPageProduct = (page: number, size = 10, search = '', order = 'asc', sort = 'name') => {
  const productService = useProductService();

  return async (dispatch) => {
    dispatch(isLoading(true));

    if (page === 0) {
      await dispatch({
        type: RESET_PAGE_PRODUCT,
      });
    }
    await productService
      .loadPageProduct(page, size, search, order, sort)
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
    messageError(err.response?.data.message);
  }
}
