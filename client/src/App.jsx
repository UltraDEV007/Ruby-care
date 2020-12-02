import "./App.css";
import { Paper } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import { CurrentUserProvider } from "./Context/CurrentUser/CurrentUserContext";
import Home from "./screens/main/Home/Home";
import InsightsContainer from "./containers/InsightsContainer";
import Settings from "./screens/main/Settings/Settings";
import { DarkModeProvider } from "./Context/DarkMode/DarkModeContext";

function App() {
  return (
    <CurrentUserProvider>
      <Paper>
        <DarkModeProvider>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/insights">
              <InsightsContainer />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </DarkModeProvider>
      </Paper>
    </CurrentUserProvider>
  );
}

export default App;
