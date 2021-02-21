import type { ComponentType } from "react";
import { ThemeProvider } from "styled-components";

import { ElementType } from "api/element";

import { GlobalStyle } from "./style";

export const theme = {
  primary: "#212121",
  secondary: "#757575",
  lightPrimary: "#4b64fa",
  text: "#212121",
  neutral: "#FFFFFF",
  divider: "#BDBDBD",
  accent: "#4d91fE",
  accent2: "rgba(232, 42, 36, 0.4)",
  size: {
    header: "18px",
    text: "14px",
    secondaryText: "12px",
    thirdText: "10px",
    subText: "8px",
  },
  table: {
    cellWidth: 76,
    cellHeight: 50,
    color: {
      [ElementType.ALKALI]: "#FEC590",
      [ElementType.ALKALINE]: "#FFDF92",
      [ElementType.TRANSITION]: "#ECFF91",
      [ElementType.POST_TRANSITION]: "#FEF991",
      [ElementType.METALLOIDS]: "#91FF9E",
      [ElementType.NONMETALS]: "#AB91FF",
      [ElementType.HALOGENS]: "#F992FF",
      [ElementType.NOBLE]: "#90DFFE",
      [ElementType.UNKNOWN]: "#4d91fE",
      [ElementType.LANTANOIDS]: "#D1FF92",
      [ElementType.ACTINOIDS]: "#B7FF91",
    },
  },
  transition: "0.25s",
  priority: {
    base: 0,
    lower: 1,
    upper: 1,
  },
};

export function withTheme<T>(WrappedComponent: ComponentType<T>) {
  return function (props: Omit<T, "theme">): JSX.Element {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <WrappedComponent {...(props as T)} />
      </ThemeProvider>
    );
  };
}
