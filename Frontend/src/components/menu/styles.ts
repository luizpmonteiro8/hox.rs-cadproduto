import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    background-color: #626262;
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

export const Menu = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0px;
    left: -270px;
    width: 250px;
    height: 100vh;
    background-color: #f0f0f0;
    transition: 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;

    details > summary {
      list-style: none;
    }

    details[open] > summary {
    }

    details[open] summary .arrow {
      transform: rotate(0deg);
      transition: transform 0.5s;
    }

    .arrow {
      transform: rotate(90deg);
      transition: transform 0.5s;
    }

    .title {
      border-bottom: 1px solid #626262;
      font-size: 16px;
      padding: 15px 20px;
      width: 210px;
      cursor: pointer;
      color: #626262;
    }

    .description {
      font-size: 14px;
      padding: 10px;
      color: #626262;
      margin-left: 35px;
      background-color: #f0f0f0;
      cursor: pointer;
      border-bottom: 1px solid #626262;
    }

    .description:active {
      transform: scale(0.95);
    }

    .description:hover,
    .title:hover {
      background-color: #d8d8d8;
    }
  `}
`;

export const MenuTitle = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    padding-left: 30px;
    color: #626262;
    font-family: 'Montserra';
    margin-top: 25px;
    margin-bottom: 30px;

    p {
      margin: 0;
    }
  `}
`;

export const MenuBackground = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: fixed;
    left: 250px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
    opacity: 0.5;
    background-color: #000;
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 10px;
  `}
`;
