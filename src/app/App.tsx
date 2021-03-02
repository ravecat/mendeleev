import { context } from "@reatom/react";
import React from "react";
import { RouterProvider } from "react-router5";
import { ThemeProvider } from "styled-components";

import { App as AppView } from "components/App";

import { router } from "./routing";
import { store } from "./store";
import { GlobalStyle, theme } from "./theme";

export const App = (): JSX.Element => {
  return (
    <RouterProvider router={router}>
      <context.Provider value={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppView />
        </ThemeProvider>
      </context.Provider>
    </RouterProvider>
  );
};
