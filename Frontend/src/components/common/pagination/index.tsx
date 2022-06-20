import * as Styled from './styles';

type Props = {
  pagination: any;
  loadPageProduct: (page: number, size: number, search: string, orderValue: string, fieldValue: string) => void;
  size: number;
  search: string;
  orderValue: string;
  fieldValue: string;
};

export const Pagination = ({ pagination, loadPageProduct, size, search, orderValue, fieldValue }: Props) => {
  return (
    <Styled.Wrapper>
      <div style={{ display: 'flex' }}>
        <button
          className="page-link"
          disabled={pagination.page === 0 ? true : false}
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
          disabled={pagination.page === 0 ? true : false}
          onClick={(e) => {
            e.preventDefault();
            loadPageProduct(pagination.page - 1, size, search, orderValue, fieldValue);
          }}
        >
          Anterior
        </button>
      </div>

      <div style={{ display: 'flex' }}>
        <span className="page-link-number">
          Pagina: {String(pagination.page + 1)} de {String(pagination.lastPage + 1)}
        </span>
      </div>

      <div style={{ display: 'flex' }}>
        <button
          className="page-link"
          disabled={pagination.page === pagination.lastPage || pagination.length == 0 ? true : false}
          onClick={(e) => {
            e.preventDefault();

            loadPageProduct(pagination.page + 1, size, search, orderValue, fieldValue);
          }}
        >
          Próxima
        </button>
      </div>

      <div style={{ display: 'flex' }}>
        <button
          className="page-link"
          disabled={pagination.page === pagination.lastPage || pagination.length == 0 ? true : false}
          onClick={(e) => {
            e.preventDefault();
            loadPageProduct(pagination.lastPage, size, search, orderValue, fieldValue);
          }}
        >
          Ultima
        </button>
      </div>
    </Styled.Wrapper>
  );
};
