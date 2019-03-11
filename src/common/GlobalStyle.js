import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export default createGlobalStyle`
  ${normalize()};
  
  body {
    height: 100%;
    color: black;
  }
  
  body * {
    margin: 0;
    box-sizing: border-box;
    line-height: 1.5;
    font-family: Roboto, sans-serif;
  }
  
  [hidden] {
    display: none !important;
  }
  
  b,
  strong {
    font-weight: bold;
  }

  li {
    list-style-type: none;
  }

`;
