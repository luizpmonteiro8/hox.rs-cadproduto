/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

export const Button = styled.div`
  ${({ theme }) => css`
    a {
      font-size: 100px;
      margin-right: 30px;
      position: absolute;
      height: 55px;
      width: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 5px solid #1e90ff;
      box-sizing: border-box;
      border-radius: 5px;
      color: #fff;
      background-color: #1e90ff;
      transform: rotateX(90deg) translateZ(25px);
    }

    span {
      position: relative;
      display: inline-flex;
      width: 180px;
      height: 55px;
      margin: 0 15px;
      perspective: 1000px;
    }
    span a {
      font-size: 19px;
      letter-spacing: 1px;
      transform-style: preserve-3d;
      transform: translateZ(-25px);
      transition: transform 0.25s;
      font-family: 'Montserrat', sans-serif;
    }

    span a:after {
      position: absolute;
      content: 'Trocar tela';
      height: 55px;
      width: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border-radius: 5px;
    }

    span a:before {
      color: #fff;
      background: #fff;
      transform: rotateY(0deg) translateZ(25px);
    }
    span a:after {
      color: #000;
      transform: rotateX(90deg) translateZ(25px);
    }

    span a:hover:after {
      border: 5px solid black;
    }

    a:hover {
      border: none;
      background-color: transparent;
      transform: translateZ(-25px) rotateX(-90deg);
    }

    @media (max-width: 768px) {
      span {
        width: 80px;
      }

      a {
        width: 80px;
      }
    }
  `}
`;
