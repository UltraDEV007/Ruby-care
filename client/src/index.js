import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "./context/CurrentUserContext";
import AllUsersProvider from "./context/AllUsersContext";
import reducer, { initialState } from "./reducers/currentUserReducer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AllUsersProvider>
        <CurrentUserProvider initialState={initialState} reducer={reducer}>
          <App />
        </CurrentUserProvider>
      </AllUsersProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
