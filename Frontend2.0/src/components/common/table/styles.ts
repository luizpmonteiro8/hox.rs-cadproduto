import styled, { css } from 'styled-components';

export const Table = styled.table`
  ${({ theme }) => css`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 90vw;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.1);

    td,
    th {
      text-align: center;
      padding: 8px;
      color: black;
    }

    a {
      cursor: pointer;
    }

    th {
      background-color: #176cc0;
      color: black;
    }

    svg {
      cursor: pointer;
    }

    tr:nth-child(even) {
      background-color: #e6e6e6;
    }

    tr:hover {
      background-color: #d8d8d8;
    }
  `}
`;
