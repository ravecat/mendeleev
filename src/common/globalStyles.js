import { injectGlobal } from "styled-components";
import { normalize } from "polished";

injectGlobal`
  ${normalize()};

  [hidden] {
    display: none !important;
  }

  html {
    color: black;
  }
  
  * {
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
