import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import createStore from './store';
import GlobalStyle from 'common/GlobalStyle'
import App from "./App";

const store = createStore();

ReactDOM.render(
  <Provider store={ store }>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
