import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
 html {
    scroll-behavior: smooth;
  }
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: 'Jost', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background:${({ theme }) => theme.colors.background} ;
  color:${({ theme }) => theme.colors.textSecundary}
  //linear-gradient(to bottom, #1e90ff, #87cefa, #fff);
}

    button,
    a {
      border-radius: 20px;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text};
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
      border: 1px solid ${({ theme }) => theme.colors.buttonMouseHover};
      background-color: ${({ theme }) => theme.colors.buttonMouseHover};
    }

    a:focus,
    button:focus {
      outline: none;
    }

    .clearButton{
      border-radius: 0;
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.text};
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      transition: transform 80ms ease-in;
      cursor: pointer;
    }

    .clearButton:hover{
      border: none;
      background-color:transparent;
    }

    .checkbox {
      cursor: pointer;
      appearance: none;
      width: 30px;
      height: 30px;
      border: 3px solid ${({ theme }) => theme.colors.checkboxColorBorder};
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
      background: ${({ theme }) => theme.colors.checkboxColorBorder};
      border-radius: 50%;
      opacity: 0;
      transition: all 600ms ease-in-out;
      position: absolute;
    }

    .checkbox:before {
      border-radius: 0;
      background: transparent;
      border: 4px solid ${({ theme }) => theme.colors.checkboxColorBorder};
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
`;
