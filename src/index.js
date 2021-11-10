import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Store from "./Store";

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
