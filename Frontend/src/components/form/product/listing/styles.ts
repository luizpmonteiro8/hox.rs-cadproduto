import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    @media (max-width: 768px) {
      overflow-x: scroll;
    }

    .react-bootstrap-table {
      min-width: 500px;
    }
  `}
`;

export const Table = styled.div`
  ${({ theme }) => css`
    min-width: 580px;
  `}
`;
