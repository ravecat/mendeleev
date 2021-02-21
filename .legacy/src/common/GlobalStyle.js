import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export default createGlobalStyle`
  ${normalize()}

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
    line-height: 1.5;
    font-family: Roboto, sans-serif;
    font-size: ${({ theme }) => theme.textSize.text};
  }
  
  [hidden] {
    display: none !important;
  }

  a[disabled] {
    pointer-events: none;
  }
  
  b,
  strong {
    font-weight: bold;
  }

  li {
    list-style-type: none;
  }

`;
