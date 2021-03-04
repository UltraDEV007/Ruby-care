import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "./context/CurrentUserContext";
import reducer, { initialState } from "./reducers/currentUserReducer";
import AllUsersContextProvider from "./context/AllUsersContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AllUsersContextProvider>
        <CurrentUserProvider initialState={initialState} reducer={reducer}>
          <App />
        </CurrentUserProvider>
      </AllUsersContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
