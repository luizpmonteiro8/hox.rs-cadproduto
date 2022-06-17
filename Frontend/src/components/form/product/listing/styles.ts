import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 70px;
    margin-bottom: 50px;

    h1,
    h4 {
      margin: 0px;
    }

    .page-link {
      border: 1px solid #626262;
      background-color: #626262;
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
      border: 1px solid #626262;
      background-color: #dddddd;
      color: #ffffff;
      font-size: 12px;
      font-weight: bold;
      padding: 6px 25px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: transform 80ms ease-in;
      cursor: default;
    }

    .page-link-number {
      border: 1px solid #626262;
      background-color: #626262;
      color: #ffffff;
      font-size: 12px;
      font-weight: bold;
      padding: 6px 25px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: transform 80ms ease-in;
      margin-left: 15px;
      cursor: default;
    }

    @media (max-width: 750px) {
      .page-link,
      .page-link-number {
        margin-bottom: 5px;
      }
    }
  `}
`;

export const TitleAndSearch = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
  `}

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

export const Pagination = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: end;
  `}
`;

export const Table = styled.div`
  ${({ theme }) => css`
    width: 90vw;
    margin-bottom: 25px;

    @media (max-width: 884px) {
      overflow-x: scroll;
    }
  `}
`;
