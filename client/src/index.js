import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Nest as ProvidersNest } from "./components/Helpers/Nest";
import { appProviders } from "./utils/appProviders";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProvidersNest elements={appProviders}>
        <App />
      </ProvidersNest>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
