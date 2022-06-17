/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
    }

    &&& {
      font-family: 'Montserrat', sans-serif;
    }

    h1 {
      text-align: center;
    }

    p {
      padding: 5px;
      text-align: center;
    }

    a {
      cursor: pointer;
    }

    input {
      background-color: #eee;
      border: none;
      padding: 12px 15px;
      margin: 8px 0;
      width: 100%;
    }

    button {
      border-radius: 20px;
      border: 1px solid #1e90ff;
      background-color: #1e90ff;
      color: #ffffff;
      font-size: 12px;
      font-weight: bold;
      padding: 12px 45px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: transform 80ms ease-in;
      cursor: pointer;
    }

    button:hover {
      transform: scale(0.95);
      background-color: #87cefa;
    }

    button:focus {
      outline: none;
    }

    @media (max-width: 784px) {
      button {
        border-radius: 20px;
        border: 1px solid #ffffff;
        background-color: #ffffff;
        color: #1e90ff;
        font-size: 12px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
        cursor: pointer;
      }
    }
  `}
`;

export const ContainerMain = styled.div`
  ${({ theme }) => css`
    display: flex;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
    background-color: #d5cbc9;

    @media (max-width: 784px) {
      width: 480px;
      flex-direction: column-reverse;
    }

    @media (max-width: 500px) {
      width: 250px;
      flex-direction: column-reverse;
    }
  `}
`;

export const ContainerLeft = styled.div`
  ${({ theme }) => css`
    min-width: 50%;
    min-height: 480px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d5cbc9;

    @media (max-width: 784px) {
      min-height: 250px;
      margin-bottom: 15px;
    }
  `}
`;

export const ContainerRight = styled.div`
  ${({ theme }) => css`
    background-color: #87cefa;
    min-width: 50%;
    min-height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 784px) {
      min-height: 250px;
      background-color: #d5cbc9;
    }
  `}
`;

export const Form = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0px;
    right: 0px;
  `}
`;
