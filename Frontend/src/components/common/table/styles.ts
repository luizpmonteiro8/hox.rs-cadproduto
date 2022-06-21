import styled, { css } from 'styled-components';
import { ThemeType } from 'styles/theme';

type Props = {
  theme: ThemeType;
};

export const Wrapper = styled.div`
  ${({ theme }: Props) => css`
    height: 100%;
    width: 100%;
  `}
`;

export const Table = styled.table`
  ${({ theme }: Props) => css`
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
      color: ${theme.colors.textSecundary};
    }

    a {
      cursor: pointer;
    }

    th {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.text};
      min-width: 50px;
    }

    svg {
      cursor: pointer;
    }

    tr:nth-child(even) {
      background-color: ${theme.colors.tableSecondBG};
    }

    tr:hover {
      background-color: ${theme.colors.tableMouseOver};
    }
  `}
`;
