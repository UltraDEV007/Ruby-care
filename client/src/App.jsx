import "./App.css";
import { Paper } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Login from "./screens/auth/Login/Login";
import Register from "./screens/auth/Register/Register";
import Home from "./screens/main/Home/Home";
import Settings from "./screens/main/Settings/Settings";
import InsightsContainer from "./containers/InsightsContainer";
import UsersContainer from "./containers/UsersContainer";
import { DarkModeProvider } from "./components/Context/DarkModeContext";
import NotFound from "./screens/Error/NotFound";
import FirefoxBrowser from "./screens/Error/FirefoxBrowser";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { verifyUser } from "./services/auth";
import { useStateValue } from "./components/Context/CurrentUserContext";
import { firefoxAgent } from "./utils/detectBrowsers";

function App() {
  const [, dispatch] = useStateValue();
  const history = useHistory();
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      dispatch({ type: "SET_USER", currentUser: userData });
      if (!userData) {
        history.push("/login");
      }
    };
    handleVerify();
  }, [history, dispatch]);

  if (firefoxAgent) {
    return (
      <>
        <FirefoxBrowser firefoxAgent={firefoxAgent} />;
      </>
    );
  }
  return (
    <DarkModeProvider>
      <Paper style={{ minHeight: "100vh" }}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/insights" component={InsightsContainer} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Paper>
    </DarkModeProvider>
  );
}

export default App;
