import styled, { css } from 'styled-components';
import { ThemeType } from 'styles/theme';

type Props = {
  theme: ThemeType;
};

export const Wrapper = styled.div`
  ${({ theme }: Props) => css`
    display: flex;
    justify-content: center;

    h1 {
      font-family: 'Montserra';
    }

    @media (max-width: 540px) {
      width: 90vw;
    }
  `}
`;

export const ContainerMain = styled.div`
  ${({ theme }: Props) => css`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    padding: 25px;
    width: 450px;
    max-width: 100%;
    background-color: #fff;

    @media (max-width: 540px) {
      width: 90vw;
    }
  `}
`;

export const Button = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    .buttonLimpar {
      display: flex;
      margin-left: 10px;
    }

    @media (max-width: 330px) {
      flex-direction: column;

      .buttonLimpar {
        margin-left: 0px;
        margin-top: 10px;
      }
    }
  `}
`;
