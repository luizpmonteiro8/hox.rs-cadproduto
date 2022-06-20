/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { ThemeType } from 'styles/theme';

type Props = {
  theme: ThemeType;
};

export const Wrapper = styled.div`
  ${({ theme }: Props) => css`
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
      background-color: ${theme.colors.formInputBackground};
      border: none;
      padding: 12px 15px;
      margin: 8px 0;
      width: 90%;
    }

    input:disabled {
      cursor: not-allowed;
      background-color: ${theme.colors.formInputBackgroundDisable};
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
