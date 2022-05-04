import BootstrapTable from 'react-bootstrap-table-next';
import { useState, useEffect } from 'react';
import { Product } from 'app/models/product';
import { useRouter } from 'next/router';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import * as Styled from './styles';
import { connect, ConnectedProps } from 'react-redux';
import { DeleteProduct, LoadPageProduct } from 'store/actions/product';

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

  useEffect(() => {
    props.loadAll();
  }, []);

  const columns = [
    {
      dataField: 'id',
      text: 'ID',
    },
    {
      dataField: 'name',
      text: 'Nome',
      sort: true,
    },
    {
      dataField: 'productionDate',
      text: 'Data de fabricação',
    },
    {
      dataField: 'perishableProduct',
      text: 'Perecível',
      formatter: (cellContent, row) => <div>{row.perishableProduct ? 'Sim' : 'Não'}</div>,
    },
    {
      dataField: 'expirationDate',
      text: 'Data de expiração',
    },
    {
      dataField: 'price',
      text: 'Bloqueado',
    },
    {
      dataField: 'Editar',
      text: 'Editar',
      isDummyField: true,
      csvExport: false,
      formatter: (cell, row: Product) => (
        <div>
          <a onClick={() => router.replace(`/cadastros/produtos?id=${row.id}`)} className="btn btn-warning me-1">
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
      {props.product.length >= 1 && (
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
              props.delete(productDelete.id);
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadAll: () => dispatch(LoadPageProduct()),
    delete: (id) => dispatch(DeleteProduct(id)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(ProductListing);
