import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Product } from 'app/models/product';
import * as Styled from './styles';
import { connect, ConnectedProps } from 'react-redux';
import { DeleteProduct, LoadPageProduct } from 'store/actions/product';
import { Loading } from 'components/common/loading';
import { Table, TableItem } from 'components/common/table';
import { Modal } from 'components/common/modal';
import { Input } from 'components/common/input';

type Props = PropsFromRedux;

const ProductListing = (props: Props) => {
  const [search, setSearch] = useState('');
  const [size, setSize] = useState(10);
  const [orderValue, setOrder] = useState('asc');
  const [fieldValue, setField] = useState('name');
  const [loading, setLoading] = useState(false);
  const [activeModalDelete, setActiveModalDelete] = useState(false);
  const [productName, setProductName] = useState('');
  const [productId, setProductId] = useState(0);

  useEffect(() => {
    setLoading(true);
    props.loadPageProduct(0);
    setLoading(false);
  }, []);

  const loadPageProduct = async (page: number, size?: number, search?: string, order?: string, sort?: string) => {
    setLoading(true);
    await props.loadPageProduct(page, size, search, order, sort);
    setLoading(false);
    console.log(props.pagination);
  };

  const deleteProduct = () => {
    props.deleteProduct(productId);
  };

  const modalActiveDeleteItem = (itemId: number, nameProduct: string) => {
    setProductName(nameProduct);
    setProductId(itemId);
    setActiveModalDelete(true);
  };

  return (
    <Styled.Wrapper>
      {loading && <Loading />}
      <Styled.TitleAndSearch>
        <div>
          <h1>Lista de produtos</h1>
          {props.product.length != 0 && <h4>TOTAL DE ITENS: {props.pagination?.length}</h4>}
        </div>

        <Input
          id="search"
          name="search"
          onChange={async (e) => {
            setSearch(e.target.value);
            setOrder('asc');
            setField('name');
            loadPageProduct(0, size, e.target.value, orderValue, fieldValue);
          }}
          value={search}
          label={'Buscar'}
          autoComplete="off"
        />
      </Styled.TitleAndSearch>

      <Styled.Table>
        <Table titles={['Id', 'Nome', 'Perecível', 'Data de fabricação', 'Data de Validade', 'Preço', 'Ações']}>
          <TableItem
            keys={['id', 'name', 'perishableProduct', 'productionDate', 'expirationDate', 'price']}
            type={['string', 'string', 'boolean', 'date', 'date', 'money']}
            returnBoolean={['Sim', 'Não']}
            items={props.product}
            actionUpdateDelete={true}
            url={'/cadastros/produtos?id='}
            modalDelete={modalActiveDeleteItem}
          ></TableItem>
        </Table>
      </Styled.Table>

      {props.pagination?.length > 0 && (
        <Styled.Pagination>
          <div style={{ display: 'flex' }}>
            <button
              className="page-link"
              disabled={props.pagination.page === 0 ? true : false}
              onClick={(e) => {
                e.preventDefault();
                loadPageProduct(0, size, search, orderValue, fieldValue);
              }}
            >
              Primeira
            </button>
          </div>

          <div style={{ display: 'flex' }}>
            <button
              className="page-link"
              disabled={props.pagination.page === 0 ? true : false}
              onClick={(e) => {
                e.preventDefault();
                loadPageProduct(props.pagination.page - 1, size, search, orderValue, fieldValue);
              }}
            >
              Anterior
            </button>
          </div>

          <div style={{ display: 'flex' }}>
            <span className="page-link-number">
              Pagina: {String(props.pagination.page + 1)} de {String(props.pagination.lastPage + 1)}
            </span>
          </div>

          <div style={{ display: 'flex' }}>
            <button
              className="page-link"
              disabled={
                props.pagination.page === props.pagination.lastPage || props.pagination.length == 0 ? true : false
              }
              onClick={(e) => {
                e.preventDefault();
                loadPageProduct(props.pagination.page + 1, size, search, orderValue, fieldValue);
              }}
            >
              Próxima
            </button>
          </div>

          <div style={{ display: 'flex' }}>
            <button
              className="page-link"
              disabled={
                props.pagination.page === props.pagination.lastPage || props.pagination.length == 0 ? true : false
              }
              onClick={(e) => {
                e.preventDefault();
                loadPageProduct(props.pagination.lastPage, size, search, orderValue, fieldValue);
              }}
            >
              Ultima
            </button>
          </div>
        </Styled.Pagination>
      )}

      <Modal
        active={activeModalDelete}
        setActive={setActiveModalDelete}
        title={'Deletar produto'}
        message={`Deseja deletar produto com nome ${productName}?`}
        affirmative={deleteProduct}
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
