import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";
import "react-virtualized/styles.css";
import "react-virtualized-tree/lib/main.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
