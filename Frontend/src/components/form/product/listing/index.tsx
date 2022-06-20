import { useState, useEffect } from 'react';
import { Product } from 'app/models/product';
import * as Styled from './styles';
import { connect, ConnectedProps } from 'react-redux';
import { DeleteProduct, LoadPageProduct } from 'store/actions/product';
import { Loading } from 'components/common/loading';
import { Table, TableItem } from 'components/common/table';
import { Modal } from 'components/common/modal';
import { Input } from 'components/common/input';
import { Pagination } from 'components/common/pagination';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

type Props = PropsFromRedux;

const ProductListing = (props: Props) => {
  const [search, setSearch] = useState('');
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(0);
  const [orderValue, setOrder] = useState('asc');
  const [fieldValue, setField] = useState('name');

  //loading page
  const [loading, setLoading] = useState(false);

  //delete modal
  const [activeModalDelete, setActiveModalDelete] = useState(false);
  const [productName, setProductName] = useState('');
  const [productId, setProductId] = useState(0);

  //table
  const [sortValueIcon, setSortIcon] = useState('Nome'); //portugues
  const tableTitleHead = ['Id', 'Nome', 'Perecível', 'Data de fabricação', 'Data de Validade', 'Preço', 'Ações'];
  const tableValue = ['id', 'name', 'perishableProduct', 'productionDate', 'expirationDate', 'price'];

  useEffect(() => {
    setLoading(true);
    props.loadPageProduct(0, size, search, orderValue, fieldValue);
    setLoading(false);
  }, []);

  const loadPageProduct = async (page: number, size?: number, search?: string, order?: string, sort?: string) => {
    setLoading(true);
    await props.loadPageProduct(page, size, search, order, sort);
    setLoading(false);
  };

  const loadPageProductOrder = async (index) => {
    setOrder(orderValue == 'asc' ? 'desc' : 'asc');
    setSortIcon(tableTitleHead[index]);
    setField(tableValue[index]);

    setLoading(true);
    await props.loadPageProduct(page, size, search, orderValue == 'asc' ? 'desc' : 'asc', tableValue[index]);
    setLoading(false);
    console.log('depois1', orderValue);
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
            loadPageProduct(0, size, e.target.value, orderValue, fieldValue);
          }}
          value={search}
          placeholder={'Buscar por produto'}
          autoComplete="off"
        />
      </Styled.TitleAndSearch>

      <Styled.Table>
        <Table
          titles={tableTitleHead}
          sortActiveOrder={orderValue == 'asc' ? 'desc' : 'asc'}
          titleSortActive={sortValueIcon}
          loadPageProductOrder={loadPageProductOrder}
        >
          <TableItem
            keys={tableValue}
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
        <Pagination
          pagination={props.pagination}
          loadPageProduct={loadPageProduct}
          size={size}
          search={search}
          orderValue={orderValue}
          fieldValue={fieldValue}
        />
      )}

      <Modal
        active={activeModalDelete}
        setActive={setActiveModalDelete}
        title={'Deletar produto'}
        message={`Deseja deletar produto com nome ${productName}?`}
        affirmative={deleteProduct}
        icon={faExclamationTriangle}
        color={'red'}
      />
      {loading === true && <h1>Carregando...</h1>}
      {props.product.length == 0 && loading === false && <h1>Nenhum valor encontrado.</h1>}
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
    loadPageProduct: (page: number, size: number, search: string, order: string, sort: string) =>
      dispatch(LoadPageProduct(page, size, search, order, sort)),
    deleteProduct: (id) => dispatch(DeleteProduct(id)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProductListing);
