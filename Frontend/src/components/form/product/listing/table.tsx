/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from 'app/models/product';
import { formatReal } from 'app/util/money';
import { useRouter } from 'next/router';
import { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import * as Styled from './styles';
import { Button, Modal } from 'react-bootstrap';
import { Input } from 'components/common/input';

type Props = {
  orderValue: any;
  size: any;
  search: any;
  product: Product[];
  pagination: any;
  fieldValue: any;
  setOrder(value: any): any;
  setField(value: any): any;
  loadPageProduct(page: number, size?: number, search?: string, order?: string, sort?: string): any;
  setSearch(value: any): any;
  deleteProduct(value: any): any;
};

export const ProductListingTable = ({
  orderValue,
  size,
  search,
  product,
  pagination,
  fieldValue,
  setOrder,
  setField,
  loadPageProduct,
  setSearch,
  deleteProduct,
}: Props) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [productDelete, setProductDelete] = useState<Product>({
    id: null,
    name: '',
    productionDate: '',
    perishableProduct: false,
    expirationDate: '',
    price: 0,
  });

  const columns = [
    {
      dataField: 'id',
      text: 'ID',
      sort: true,
      onSort: (field) => {
        setOrder(orderValue === 'asc' ? 'desc' : 'asc');
        setField(field);
        loadPageProduct(0, size, search, orderValue === 'asc' ? 'desc' : 'asc', field);
      },
    },
    {
      dataField: 'name',
      text: 'Nome',
      sort: true,
      onSort: (field, order) => {
        setOrder(orderValue === 'asc' ? 'desc' : 'asc');
        setField(field);
        loadPageProduct(0, size, search, orderValue === 'asc' ? 'desc' : 'asc', field);
      },
    },
    {
      dataField: 'productionDate',
      text: 'Data de fabricação',
      sort: true,
      onSort: (field, order) => {
        setOrder(orderValue === 'asc' ? 'desc' : 'asc');
        setField(field);
        loadPageProduct(0, size, search, orderValue === 'asc' ? 'desc' : 'asc', field);
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
        setOrder(orderValue === 'asc' ? 'desc' : 'asc');
        setField(field);
        loadPageProduct(0, size, search, orderValue === 'asc' ? 'desc' : 'asc', field);
      },
    },
    {
      dataField: 'expirationDate',
      text: 'Data de expiração',
      sort: true,
      onSort: (field, order) => {
        setOrder(orderValue === 'asc' ? 'desc' : 'asc');
        setField(field);
        loadPageProduct(0, size, search, orderValue === 'asc' ? 'desc' : 'asc', field);
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
        setOrder(orderValue === 'asc' ? 'desc' : 'asc');
        setField(field);
        loadPageProduct(0, size, search, orderValue === 'asc' ? 'desc' : 'asc', field);
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
      <div className="row m-2">
        <div className="col-6 ">
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
            label="Busca"
            autoComplete="off"
          />
        </div>
      </div>

      <h5>TOTAL DE ITENS: {pagination?.length}</h5>

      {product.length >= 1 && (
        <Styled.Table>
          <BootstrapTable
            wrapperClasses="table-responsive-md"
            keyField="id"
            data={product}
            columns={columns}
            noDataIndication="Nenhum valor encontrado."
            bootstrap4
            hover
            striped
            bordered={false}
          />
        </Styled.Table>
      )}

      {pagination && (
        <div className="row d-flex justify-content-center">
          <nav>
            <ul className="pagination">
              <li className={`page-item ${pagination.page === 0 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => {
                    loadPageProduct(0, size, search, orderValue, fieldValue);
                  }}
                >
                  Primeira
                </button>
              </li>
              <li className={`page-item ${pagination.page === 0 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => {
                    loadPageProduct(pagination.page - 1, size, search, orderValue, fieldValue);
                  }}
                >
                  Anterior
                </button>
              </li>
              <li className="page-item disabled">
                <span className="page-link">{String(pagination.page + 1)}</span>
              </li>
              <li
                className={`page-item ${
                  pagination.page === pagination.lastPage || pagination.length == 0 ? 'disabled' : ''
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => {
                    loadPageProduct(pagination.page + 1, size, search, orderValue, fieldValue);
                  }}
                >
                  Próxima
                </button>
              </li>
              <li
                className={`page-item ${
                  pagination.page === pagination.lastPage || pagination.length == 0 ? 'disabled' : ''
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => {
                    loadPageProduct(pagination.lastPage, size, search, orderValue, fieldValue);
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
              deleteProduct(productDelete?.id);
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
