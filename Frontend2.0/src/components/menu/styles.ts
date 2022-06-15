import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 50px;
    background-color: #176cc0;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    padding-right: 15px;
    padding-left: 15px;
    justify-content: space-between;
    min-width: 250px;

    button {
      border-radius: 20px;
      border: 1px solid #115191;
      background-color: #115191;
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
      background-color: #324965;
    }

    button:focus {
      outline: none;
    }

    a {
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
      cursor: pointer;
    }
  `}
`;

export const Hambuguer = styled.div`
  ${({ theme }) => css`
    .checkbox {
      width: 100px;
      height: 80px;
      display: flex;
      justify-content: center;
      position: relative;
      cursor: pointer;
    }

    .checkbox .trace {
      width: 45px;
      height: 4px;
      background-color: #000;
      position: absolute;
      border-radius: 4px;
      transition: 0.5s ease-in-out;
    }

    .checkbox .trace:nth-child(1) {
      top: 26px;
      transform: rotate(0);
    }

    .checkbox .trace:nth-child(2) {
      top: 35px;
      transform: rotate(0);
    }

    .checkbox .trace:nth-child(3) {
      top: 45px;
      transform: rotate(0);
    }

    #toggle {
      display: none;
    }

    #toggle:checked + .checkbox .trace:nth-child(1) {
      transform: rotate(45deg);
      top: 37px;
    }

    #toggle:checked + .checkbox .trace:nth-child(2) {
      transform: translateX(-100px);
      width: 30px;
      visibility: hidden;
    }

    #toggle:checked + .checkbox .trace:nth-child(3) {
      transform: rotate(-45deg);
      top: 38px;
    }
  `}
`;

export const Menu = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 50px;
    left: -270px;
    width: 250px;
    height: 94vh;
    background-color: #176cc0;
    transition: 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;

    details > summary {
      list-style: none;
    }

    details[open] > summary {
      background-color: #115191;
    }

    details[open] summary .arrow {
      transform: rotate(0deg);
      transition: transform 1s;
    }

    .arrow {
      transform: rotate(90deg);
      transition: transform 1s;
    }

    .title {
      border-top: 1px solid #1562af;
      border-bottom: 1px solid #115191;
      font-size: 20px;
      border-radius: 4px;
      padding: 20px;
      width: 210px;
      cursor: pointer;
      color: #c6d4df;
    }

    .description {
      font-size: 20px;
      padding: 10px;
      color: #c6d4df;
      padding-left: 35px;
      background-color: #115191;
      cursor: pointer;
    }

    .description:hover {
      background-color: #051b30;
    }

    .description:active {
      transform: scale(0.95);
    }

    .title:hover {
      background-color: #115191;
    }
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 10px;
  `}
`;
