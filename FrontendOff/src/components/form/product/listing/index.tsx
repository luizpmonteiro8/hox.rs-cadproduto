import BootstrapTable from 'react-bootstrap-table-next';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Product } from 'app/models/product';
import { useRouter } from 'next/router';

import Button from 'react-bootstrap/Button';
import * as Styled from './styles';
import { connect, ConnectedProps } from 'react-redux';
import { DeleteProduct, LoadPageProduct } from 'store/actions/product';
import { Input } from 'components/common/input';
import { formatReal } from 'app/util/money';
import { Loading } from 'components/common/loading';
import { ProductListingTable } from './table';

type Props = PropsFromRedux;

const ProductListing = (props: Props) => {
  const [search, setSearch] = useState('');
  const [size, setSize] = useState(10);
  const [orderValue, setOrder] = useState('asc');
  const [fieldValue, setField] = useState('name');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    props.loadPageProduct(0);
    setLoading(false);
  }, []);

  const loadPageProduct = async (page: number, size?: number, search?: string, order?: string, sort?: string) => {
    setLoading(true);
    await props.loadPageProduct(page, size, search, order, sort);
    setLoading(false);
  };

  return (
    <Styled.Wrapper>
      {loading && <Loading />}
      <ProductListingTable
        orderValue={orderValue}
        size={size}
        search={search}
        product={props.product}
        pagination={props.pagination}
        fieldValue={fieldValue}
        setOrder={setOrder}
        setField={setField}
        loadPageProduct={loadPageProduct}
        setSearch={setSearch}
        deleteProduct={props.deleteProduct}
      />

      {loading === true && <h1 className="m-2">Carregando...</h1>}
      {props.product.length == 0 && loading === false && <h1 className="m-2">Nenhum valor encontrado.</h1>}
    </Styled.Wrapper>
  );
};
const mapStateToProps = ({ product }) => {
  return {
    product: product.product as Product[],
    pagination: product.pagination,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPageProduct: (page: number, size?: number, search?: string, order?: string, sort?: string) =>
      dispatch(LoadPageProduct(page, size, search, order, sort)),
    deleteProduct: (id) => dispatch(DeleteProduct(id)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProductListing);
