import { injectGlobal } from "styled-components";
import { normalize } from "polished";

injectGlobal`
  ${normalize()};

  [hidden] {
    display: none !important;
  }

  html {
    height: 100%;
    color: black;
  }
  
  * {
    margin: 0;
    line-height: 1.5;
    font-family: Roboto, sans-serif;
  }

  b,
  strong {
    font-weight: bold;
  }

  li {
    list-style-type: none;
  }

`;
