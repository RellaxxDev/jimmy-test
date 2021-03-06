import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

const ROOT = document.getElementById("root") as HTMLElement;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  ROOT
);
