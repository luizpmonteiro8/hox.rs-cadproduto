import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
  `}
`;

export const Table = styled.table`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    font-family: arial, sans-serif;
    border-collapse: collapse;
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
      background-color: #626262;
      color: black;
    }

    svg {
      cursor: pointer;
    }

    tr:nth-child(even) {
      background-color: #c5c5c5;
    }

    tr:hover {
      background-color: #d8d8d8;
    }
  `}
`;
