import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Nest } from "./components/Helpers/Nest";
import { appProviders } from "./utils/appProviders";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nest elements={appProviders}>
        <App />
      </Nest>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
