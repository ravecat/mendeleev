import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from "react-router-dom";
import theme from 'common/theme';
import createStore from './store';
import GlobalStyle from 'common/GlobalStyle'
import App from "components/App";

const store = createStore();

ReactDOM.render(
  <ThemeProvider theme={ theme }>
    <Provider store={ store }>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
