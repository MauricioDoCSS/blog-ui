import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 
  body {
    line-height: normal;
    font-family: Inter, sans-serif;
    background: ${(props) => props.theme.BG.background};
    color: ${(props) => props.theme.COLORS.textColor};
  }

  button {
    cursor: pointer;
    padding: 0;
    border: none;
    background: none;
  }
`;
