import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: 'Jost', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dce0e6;
  //linear-gradient(to bottom, #1e90ff, #87cefa, #fff);
}
`;
