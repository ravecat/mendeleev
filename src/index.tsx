import React from "react";
import ReactDOM from "react-dom";

import { router } from "app/routing";

import { App } from "./app";

router.start(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
