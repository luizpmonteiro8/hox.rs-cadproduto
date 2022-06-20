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
  //linear-gradient(to bottom, #1e90ff, #87cefa, #fff);
}
`;
