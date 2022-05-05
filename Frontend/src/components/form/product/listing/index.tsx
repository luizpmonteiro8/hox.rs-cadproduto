import BootstrapTable from 'react-bootstrap-table-next';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Product } from 'app/models/product';
import { useRouter } from 'next/router';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import * as Styled from './styles';
import { connect, ConnectedProps } from 'react-redux';
import { DeleteProduct, LoadPageProduct } from 'store/actions/product';
import { Input } from 'components/common/input';
import { formatReal } from 'app/util/money';
import { Loading } from 'components/common/loading';

type Props = PropsFromRedux;

const ProductListing = (props: Props) => {
  const router = useRouter();

  const [productDelete, setProductDelete] = useState<Product>({
    id: null,
    name: '',
    productionDate: '',
    perishableProduct: false,
    expirationDate: '',
    price: 0,
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [search, setSearch] = useState('');
  const [size, setSize] = useState(10);
  const [orderValue, setOrder] = useState('asc');
  const [fieldValue, setField] = useState('name');
  const [loading, setLoading] = useState(false);

  console.log(loading);

  useEffect(() => {
    setLoading(true);
    props.loadPageProduct(0);
    setLoading(false);
  }, []);

  const columns = [
    {
      dataField: 'id',
      text: 'ID',
      sort: true,
      onSort: (field, order) => {
        setLoading(true);
        setOrder(orderValue === 'asc' ? 'desc' : 'asc');
        setField(field);
        props.loadPageProduct(0, size, search, orderValue === 'asc' ? 'desc' : 'asc', field);
        setLoading(false);
      },
    },
    {
      dataField: 'name',
      text: 'Nome',
      sort: true,
      onSort: (field, order) => {
        setLoading(true);
        setOrder(orderValue === 'asc' ? 'desc' : 'asc');
        setField(field);
        props.loadPageProduct(0, size, search, orderValue === 'asc' ? 'desc' : 'asc', field);
        setLoading(false);
      },
    },
    {
      dataField: 'productionDate',
      text: 'Data de fabricação',
      sort: true,
      onSort: (field, order) => {
        setLoading(true);
        setOrder(orderValue === 'asc' ? 'desc' : 'asc');
        setField(field);
        props.loadPageProduct(0, size, search, orderValue === 'asc' ? 'desc' : 'asc', field);
        setLoading(false);
      },
      formatter: (cellContent, row) => {
        if (typeof row !== 'undefined') {
          const dateFormat: Date = new Date(String(row.productionDate).slice(0, 19));
          dateFormat.setHours(dateFormat.getHours() + 3);
          return (
            <div>
              {dateFormat.toLocaleDateString('pt-BR') !== 'Invalid Date' ? dateFormat.toLocaleDateString('pt-BR') : ''}
            </div>
          );
        }
      },
    },
    {
      dataField: 'perishableProduct',
      text: 'Perecível',
      formatter: (cellContent, row) => <div>{row.perishableProduct ? 'Sim' : 'Não'}</div>,
      sort: true,
      onSort: (field, order) => {
        setLoading(true);
        setOrder(orderValue === 'asc' ? 'desc' : 'asc');
        setField(field);
        props.loadPageProduct(0, size, search, orderValue === 'asc' ? 'desc' : 'asc', field);
        setLoading(false);
      },
    },
    {
      dataField: 'expirationDate',
      text: 'Data de expiração',
      sort: true,
      onSort: (field, order) => {
        setLoading(true);
        setOrder(orderValue === 'asc' ? 'desc' : 'asc');
        setField(field);
        props.loadPageProduct(0, size, search, orderValue === 'asc' ? 'desc' : 'asc', field);
        setLoading(false);
      },
      formatter: (cellContent, row) => {
        if (typeof row !== 'undefined') {
          const dateFormat: Date = new Date(String(row.expirationDate).slice(0, 19));
          dateFormat.setHours(dateFormat.getHours() + 3);
          return (
            <div>
              {dateFormat.toLocaleDateString('pt-BR') !== 'Invalid Date' ? dateFormat.toLocaleDateString('pt-BR') : ''}
            </div>
          );
        }
      },
    },
    {
      dataField: 'price',
      text: 'Preço',
      sort: true,
      onSort: (field, order) => {
        setLoading(true);
        setOrder(orderValue === 'asc' ? 'desc' : 'asc');
        setField(field);
        props.loadPageProduct(0, size, search, orderValue === 'asc' ? 'desc' : 'asc', field);
        setLoading(false);
      },
      formatter: (cellContent, row) => <div>R$ {formatReal(String(row.price))}</div>,
    },
    {
      dataField: 'Editar',
      text: 'Editar',
      isDummyField: true,
      csvExport: false,
      formatter: (cell, row: Product) => (
        <div>
          <a onClick={() => router.replace(`/cadastros/produtos?id=${row?.id}`)} className="btn btn-warning me-1">
            Alterar
          </a>
          <button
            type="button"
            onClick={() => {
              handleShow();
              setProductDelete(row);
            }}
            className="btn btn-danger"
          >
            Deletar
          </button>
        </div>
      ),
    },
  ];

  return (
    <Styled.Wrapper>
      {loading && <Loading />}
      <div className="row m-2">
        <div className="col-6 ">
          <Input
            id="search"
            name="search"
            onChange={async (e) => {
              setSearch(e.target.value);
              setOrder('asc');
              setField('name');
              props.loadPageProduct(0, size, e.target.value, orderValue, fieldValue);
            }}
            value={search}
            label="Busca"
            autoComplete="off"
          />
        </div>
      </div>

      <h5>TOTAL DE ITENS: {props.pagination?.length}</h5>

      {props.product.length >= 1 && (
        <Styled.Table>
          <BootstrapTable
            wrapperClasses="table-responsive-md"
            keyField="id"
            data={props.product}
            columns={columns}
            noDataIndication="Nenhum valor encontrado."
            bootstrap4
            hover
            striped
            bordered={false}
          />
        </Styled.Table>
      )}
      {props.product.length == 0 && <h1 className="m-2">Nenhum valor encontrado.</h1>}

      {props.pagination && (
        <div className="row d-flex justify-content-center">
          <nav>
            <ul className="pagination">
              <li className={`page-item ${props.pagination.page === 0 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => {
                    setLoading(true);
                    props.loadPageProduct(0, size, search, orderValue, fieldValue);
                    setLoading(false);
                  }}
                >
                  Primeira
                </button>
              </li>
              <li className={`page-item ${props.pagination.page === 0 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => {
                    setLoading(true);
                    props.loadPageProduct(props.pagination.page - 1, size, search, orderValue, fieldValue);
                    setLoading(false);
                  }}
                >
                  Anterior
                </button>
              </li>
              <li className="page-item disabled">
                <span className="page-link">{String(props.pagination.page + 1)}</span>
              </li>
              <li
                className={`page-item ${
                  props.pagination.page === props.pagination.lastPage || props.pagination.length == 0 ? 'disabled' : ''
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => {
                    setLoading(true);
                    props.loadPageProduct(props.pagination.page + 1, size, search, orderValue, fieldValue);
                    setLoading(false);
                  }}
                >
                  Próxima
                </button>
              </li>
              <li
                className={`page-item ${
                  props.pagination.page === props.pagination.lastPage || props.pagination.length == 0 ? 'disabled' : ''
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => {
                    setLoading(true);
                    props.loadPageProduct(props.pagination.lastPage, size, search, orderValue, fieldValue);
                    setLoading(false);
                  }}
                >
                  Ultima
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deletar</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deseja deletar item {productDelete.name}? </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              props.delete(productDelete?.id);
              handleClose();
            }}
          >
            Deletar
          </Button>
          <Button variant="info" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
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
    delete: (id) => dispatch(DeleteProduct(id)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(ProductListing);
