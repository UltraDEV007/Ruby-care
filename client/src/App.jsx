import { useMemo } from "react";
import { Paper } from "@material-ui/core";
import { ThemeStateProvider } from "./context/ThemeStateContext";
import FirefoxBrowser from "./screens/Error/FirefoxBrowser";
import { verifyUser } from "./services/auth";
import { useStateValue } from "./context/CurrentUserContext";
import { firefoxAgent as isUsingFirefox } from "./utils/detectBrowsers";
import AppRouter from "./Router/AppRouter";

function App() {
  const [, dispatch] = useStateValue();

  useMemo(async () => {
    const userData = await verifyUser();
    dispatch({ type: "SET_USER", currentUser: userData });
  }, [dispatch]);

  if (isUsingFirefox) {
    return <FirefoxBrowser firefoxAgent={isUsingFirefox} />;
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
