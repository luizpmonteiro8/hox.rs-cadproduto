/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: blocked;

    .invalid-feedback {
      display: flex;
      justify-content: center;
      color: red;
    }

    .invalid-feedback-input {
      border: 1px solid red;
    }

    .pass-wrapper {
      position: relative;
    }
  `}
`;

export const Password = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: end;
    align-items: center;
  `}
`;
