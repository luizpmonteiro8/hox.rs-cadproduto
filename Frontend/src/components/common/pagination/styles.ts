import styled, { css } from 'styled-components';
import { ThemeType } from 'styles/theme';

type Props = {
  theme: ThemeType;
};

export const Wrapper = styled.div`
  ${({ theme }: Props) => css`
    display: flex;
    align-items: center;
    justify-content: end;

    .page-link {
      border: 1px solid ${theme.colors.paginationButtonPrimary};
      background-color: ${theme.colors.paginationButtonPrimary};
      color: #ffffff;
      font-size: 12px;
      font-weight: bold;
      padding: 6px 25px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: transform 80ms ease-in;
      cursor: pointer;
      margin-left: 15px;
    }

    .page-link:hover {
      transform: scale(0.95);
      background-color: #324965;
    }

    .page-link:focus {
      outline: none;
    }

    .page-link:disabled,
    .page-link[disabled]:focus,
    .page-link[disabled]:hover {
      border: 1px solid ${theme.colors.paginationButtonPrimary};
      background-color: #dddddd;
      color: ${theme.colors.paginationButtonPrimary};
      font-size: 12px;
      font-weight: bold;
      padding: 6px 25px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: transform 80ms ease-in;
      cursor: not-allowed;
    }

    .page-link-number {
      border: 1px solid ${theme.colors.paginationButtonPrimary};
      background-color: ${theme.colors.paginationButtonPrimary};
      color: #ffffff;
      font-size: 12px;
      font-weight: bold;
      padding: 6px 25px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: transform 80ms ease-in;
      margin-left: 15px;
      cursor: not-allowed;
    }

    @media (max-width: 750px) {
      flex-direction: column;
      justify-content: center;
      .page-link,
      .page-link-number {
        margin-bottom: 5px;
      }
    }
  `}
`;
