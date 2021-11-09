import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Hotfix for hot reloading, NOTE: upon first execution of hotfix restart server
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.querySelector("#root"));
