import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "./components/Context/CurrentUserContext";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CurrentUserProvider initialState={initialState} reducer={reducer}>
        <App />
      </CurrentUserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
