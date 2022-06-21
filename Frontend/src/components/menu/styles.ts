import styled, { css, DefaultTheme } from 'styled-components';
import { ThemeType } from 'styles/theme';

type Props = {
  theme: ThemeType;
};

export const Wrapper = styled.div`
  ${({ theme }: Props) => css`
    width: 100%;
    height: 50px;
    background-color: ${theme.colors.primary};
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    padding-right: 15px;
    padding-left: 15px;
    justify-content: space-between;
    min-width: 250px;
    color: ${theme.colors.text};
    z-index: 9999;

    a {
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
      cursor: pointer;
      padding: 0;
    }
  `}
`;

type PropsMenu = {
  menuVisible: boolean;
  theme: ThemeType;
};

const menuChanger = (menuVisible: PropsMenu['menuVisible']) => css`
  left: ${menuVisible ? '0' : '-270px'};
`;

export const Menu = styled.div<PropsMenu>`
  ${({ theme, menuVisible }) => css`
    position: fixed;
    top: 0px;
    width: 250px;
    height: 100vh;
    background-color: #f0f0f0;
    transition: 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 9999;
    ${menuChanger(menuVisible)}
  `}
`;

export const Accordion = styled.div`
  ${({ theme }) => css`
    details > summary {
      list-style: none;
    }

    .title {
      border-bottom: 1px solid #626262;
      font-size: 16px;
      padding: 15px 20px;
      width: 210px;
      cursor: pointer;
      color: ${theme.colors.menuTextBorder};
    }

    .description {
      font-size: 14px;
      padding: 10px;
      color: ${theme.colors.menuTextBorder};
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
    color: ${theme.colors.menuTextBorder};

    p {
      margin: 0;
    }
  `}
`;

export const MenuBackground = styled.div<PropsMenu>`
  ${({ theme, menuVisible }) => css`
    display: ${menuVisible ? 'flex' : 'none'};
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

export const MenuBarWrapper = styled.div`
  ${({ theme }: Props) => css`
    color: ${theme.colors.text};

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    li {
      float: left;
    }
    a {
      border-radius: 0;
    }

    li a,
    .dropbtn {
      display: inline-block;
      color: ${theme.colors.text};
      text-align: center;
      padding: 13px 16px;
      text-decoration: none;
    }

    li a:hover,
    .dropdown:hover .dropbtn {
      background-color: ${theme.colors.tableMouseOver};
    }

    li.dropdown {
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      background-color: #d8d8d8;
    }

    .dropdown-content a {
      color: ${theme.colors.text};
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
      border: none;
    }

    .dropdown-content a:hover {
      background-color: #d8d8d8;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    .accordion {
      background-color: ${theme.colors.primary};

      .title {
        color: ${theme.colors.text};
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
      }
      .description {
        color: ${theme.colors.text};
        background-color: ${theme.colors.primary};
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
      }
    }
  `}
`;
