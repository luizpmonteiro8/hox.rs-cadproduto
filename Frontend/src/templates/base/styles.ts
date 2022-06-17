import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
  ${({ theme }) => css``}
  body {
    background-color: '#0000ff';
  }
  .row {
    margin: 0;
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    @media(min-width: 949px) {
      min-height: 78vh;
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css``}
`;

export const ToastContainer = styled.div`
  ${({ theme }) => css``}
`;

export const ContentContainer = styled.main`
  ${({ theme }) => css``}
`;
