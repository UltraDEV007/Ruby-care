import "./App.css";
import { Paper } from "@material-ui/core";
import { ThemeStateProvider } from "./context/ThemeStateContext";
import FirefoxBrowser from "./screens/Error/FirefoxBrowser";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { verifyUser } from "./services/auth";
import { useStateValue } from "./context/CurrentUserContext";
import { firefoxAgent } from "./utils/detectBrowsers";
import AppRouter from "./Router/AppRouter";

function App() {
  const [, dispatch] = useStateValue();
  // const history = useHistory();
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      dispatch({ type: "SET_USER", currentUser: userData });
      // if (!userData) {
      //   history.push("/login");
      // }
    };
    handleVerify();
  }, [dispatch]);

  if (firefoxAgent) {
    return (
      <>
        <FirefoxBrowser firefoxAgent={firefoxAgent} />;
      </>
    );
  }
  return (
    <ThemeStateProvider>
      <Paper style={{ minHeight: "100vh" }}>
        <AppRouter />
      </Paper>
    </ThemeStateProvider>
  );
}

export default App;
