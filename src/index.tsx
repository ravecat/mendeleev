import React from "react";
import ReactDOM from "react-dom";

import { router } from "App/withRouting";

import { App } from "./App";

router.start(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
});
