import "./App.css";
import { Paper } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Login from "./screens/auth/Login/Login";
import Register from "./screens/auth/Register/Register";
import { CurrentUserProvider } from "./components/Context/CurrentUserContext";
import Home from "./screens/main/Home/Home";
import Settings from "./screens/main/Settings";
import InsightsContainer from "./containers/InsightsContainer";
import UsersContainer from "./containers/UsersContainer";
import { DarkModeProvider } from "./components/Context/DarkModeContext";
import NotFound from "./screens/Error/NotFound";

function App() {
  return (
    <CurrentUserProvider>
      <Paper>
        <DarkModeProvider>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/insights" component={InsightsContainer} />
            <Route path="/settings" component={Settings} />
            <Route path="/users" component={UsersContainer} />
            <Route path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </DarkModeProvider>
      </Paper>
    </CurrentUserProvider>
  );
}

export default App;
