import { Switch, Route } from "react-router";
import InsightsContainer from "../containers/InsightsContainer";
import UsersContainer from "../containers/UsersContainer";
import Login from "../screens/auth/Login/Login";
import Register from "../screens/auth/Register/Register";
import NotFound from "../screens/Error/NotFound";
import Home from "../screens/main/Home/Home";
import Settings from "../screens/main/Settings/Settings";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <PrivateRoute path="/insights" component={InsightsContainer} />
    <PrivateRoute path="/settings" component={Settings} />
    <PrivateRoute path="/users" component={UsersContainer} />
    <PrivateRoute path="/" component={Home} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default AppRouter;
