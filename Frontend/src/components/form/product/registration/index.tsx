/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Product } from 'app/models/product';
import * as Styled from './styles';
import { ProductForm } from './form';
import { useRouter } from 'next/dist/client/router';
import { SaveProduct, UpdateProduct } from 'store/actions/product';
import { connect, ConnectedProps } from 'react-redux';
import { messageSucess } from 'components/common/toastr';

interface Props extends PropsFromRedux {
  setLoading: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
}

const ProductRegistration = (props: Props) => {
  const [product, setProduct] = useState<Product>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    props.setLoading(true);
    if (id) {
      setProduct(props.product.filter((item) => String(item.id) === id)[0]);
    }
    props.setLoading(false);
  }, [id]);

  const handleSubmit = async (product: Product, { resetForm, setValues }) => {
    props.setLoading(true);
    try {
      if (product.id > 0) {
        if (await props.updateProduct(product)) {
          messageSucess('Salvo com sucesso');
          resetForm();
          setValues({ id: null, name: '', productionDate: '', perishableProduct: false, expirationDate: '', price: 0 });
          router.replace('/lista/produtos');
        }
      } else {
        if (await props.saveProduct(product)) {
          messageSucess('Salvo com sucesso');
          resetForm();
          setValues({ id: null, name: '', productionDate: '', perishableProduct: false, expirationDate: '', price: 0 });
        }
      }
    } catch (error) {
      resetForm();
      setValues({ id: null, name: '', productionDate: '', perishableProduct: false, expirationDate: '', price: 0 });
      props.setLoading(false);
    }

    props.setLoading(false);
  };

  return (
    <Styled.Wrapper>
      <Styled.ContainerMain>
        <h1>Cadastro de produto</h1>
        <ProductForm product={product} onSubmit={handleSubmit} isLoading={props.isLoading} />
      </Styled.ContainerMain>
    </Styled.Wrapper>
  );
};

const mapStateToProps = ({ product }) => {
  return {
    product: product.product as Product[],
    isLoading: product.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveProduct: (product: Product) => dispatch(SaveProduct(product)),
    updateProduct: (product: Product) => dispatch(UpdateProduct(product)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(ProductRegistration);
