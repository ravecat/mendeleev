import type { ComponentType } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./style";
import { theme } from "./theme";

export function withTheme<T>(WrappedComponent: ComponentType<T>) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithTheme = (props: Omit<T, "theme">) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <WrappedComponent {...(props as T)} />
      </ThemeProvider>
    );
  };

  ComponentWithTheme.displayName = `withTheme(${displayName})`;

  return ComponentWithTheme;
}
