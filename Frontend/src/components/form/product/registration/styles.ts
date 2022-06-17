import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    h1 {
      font-family: 'Montserra';
    }

    button,
    a {
      border-radius: 20px;
      border: 1px solid #626262;
      background-color: #626262;
      color: #ffffff;
      font-size: 12px;
      font-weight: bold;
      padding: 12px 45px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: transform 80ms ease-in;
      cursor: pointer;
    }

    a:hover,
    button:hover {
      transform: scale(0.95);
      background-color: #324965;
    }

    a:focus,
    button:focus {
      outline: none;
    }

    @media (max-width: 540px) {
      width: 90vw;
    }
  `}
`;

export const ContainerMain = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    padding: 25px;
    width: 450px;
    max-width: 100%;
    background-color: #fff;

    .checkbox {
      cursor: pointer;
      appearance: none;
      width: 30px;
      height: 30px;
      border: 3px solid #eee;
      border-radius: 50%;
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      outline: none;
    }

    .checkbox {
      border-radius: 0;
    }

    .checkbox:before {
      content: '';
      width: 15px;
      height: 15px;
      background: #a6a6a6;
      border-radius: 50%;
      opacity: 0;
      transition: all 600ms ease-in-out;
      position: absolute;
    }

    .checkbox:before {
      border-radius: 0;
      background: transparent;
      border: 4px solid #a6a6a6;
      border-left: 0;
      border-top: 0;
      width: 7px;
      height: 12px;
      transform: rotate(45deg);
      top: 2px;
    }

    .checkbox:checked:before {
      opacity: 1;
    }

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
