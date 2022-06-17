import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { formatReal } from 'app/util/money';
import { useRouter } from 'next/router';
import * as Styled from './styles';

type Props = {
  titles: string[];
  children: React.ReactNode;
};

export const Table = ({ titles, children }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.Table>
        <thead>
          <tr>
            {titles.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </Styled.Table>
    </Styled.Wrapper>
  );
};

type PropsItem = {
  keys: string[];
  type: string[];
  returnBoolean?: string[];
  items: any[];
  actionUpdateDelete: boolean;
  url: string;
  modalDelete?: (itemId: number, nameProduct: string) => void;
};

export const TableItem = ({ keys, type, items, actionUpdateDelete, url, returnBoolean, modalDelete }: PropsItem) => {
  const router = useRouter();

  const formatValue = (keys, type, index, item) => {
    switch (type) {
      case 'string':
        return <td key={keys + index}>{item[keys]}</td>;
      case 'boolean':
        return <td key={keys + index}>{item[keys] ? returnBoolean?.[0] : returnBoolean?.[1]}</td>;
      case 'date':
        if (item[keys]) {
          const date = new Date(item[keys]);
          date.setHours(date.getHours() + 3);
          return <td key={keys + index}>{date.toLocaleDateString()}</td>;
        } else {
          return <td key={keys + index}> </td>;
        }
      case 'money':
        return (
          <td key={keys + index}>
            {Number(item[keys]).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </td>
        );
      default:
        break;
    }
  };

  return (
    <>
      {items.map((item, index) => {
        return (
          <tr key={'row' + index}>
            {keys.map((keys, indexKey) => {
              return <>{formatValue(keys, type[indexKey], index, item)}</>;
            })}
            {actionUpdateDelete && (
              <td key={'action' + index} style={{ minWidth: '90px' }}>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  style={{ width: '22px', height: '22px' }}
                  onClick={() => router.replace(url + item.id)}
                />

                <FontAwesomeIcon
                  icon={faTrashCan}
                  style={{ marginLeft: '15px', width: '22px', height: '22px' }}
                  onClick={() => modalDelete(item.id, item.name)}
                />
              </td>
            )}
          </tr>
        );
      })}
    </>
  );
};
