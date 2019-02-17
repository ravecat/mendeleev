import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from 'common/GlobalStyle'
import App from "./App";

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </Fragment>,
  document.getElementById("root")
);
