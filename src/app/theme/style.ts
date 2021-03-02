import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    min-height: 100%;
  }
  
  body {
    margin: 0;
    height: 100%;
    min-height: 100%;
    color: black;
  }
  
  #root {
    height: 100%;
    min-height: 100%;
  }

  body *, * ::before, * ::after {
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  [hidden] {
    display: none !important;
  }

  a[disabled] {
    pointer-events: none;
  }

  a {
    text-decoration: none;
  }
  
  b,
  strong {
    font-weight: bold;
  }

  li {
    list-style-type: none;
  }
`;
