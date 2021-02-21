import React from "react";
import { RouterProvider } from "react-router5";
import { ThemeProvider } from "styled-components";

import { App as AppView } from "components/App";

import { router } from "./withRouting";
import { GlobalStyle, theme } from "./withTheme";

export const App = () => {
  return (
    <RouterProvider router={router}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppView />
      </ThemeProvider>
    </RouterProvider>
  );
};
