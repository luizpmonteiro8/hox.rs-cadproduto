/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    .invalid-feedback {
      display: flex;
      justify-content: start;
      color: red;
      margin-bottom: 10px;
    }

    .invalid-feedback-input {
      border: 1px solid red;
    }

    .pass-wrapper {
      position: relative;
    }

    input {
      background-color: #eee;
      border: none;
      padding: 12px 15px;
      margin: 8px 0;
      width: 90%;
    }

    input:disabled {
      background-color: #bbbbbb;
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
