import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    min-height: 100%;
  }
  
  body {
    margin: 0;
    height: 100%;
    min-height: 100%;
    color: ${({ theme }) => theme.primary};
    font-size: ${({ theme }) => theme.size.text};
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

export const borderShadow = css`
  box-shadow: 0px 0px 0px 3px ${({ theme: { accent } }) => accent};
  cursor: pointer;
  position: absolute;
  z-index: ${({ theme: { priority } }) => priority.upper};
  width: 100%;
  height: 100%;
  content: "";
  transition: opacity ${({ theme: { transition } }) => transition} ease-in-out;
`;
