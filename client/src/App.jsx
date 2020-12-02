import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { yellow, red, blue } from "@material-ui/core/colors";
import { Paper } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import { CurrentUserProvider } from "./CurrentUser/CurrentUserContext";
import Home from "./screens/main/Home/Home";
import InsightsContainer from "./containers/InsightsContainer";
import Settings from "./screens/main/Settings/Settings";

function App() {
  const [darkMode, setDarkMode] = useState("light");
  const palletType = darkMode === "dark" ? "dark" : "light";
  const themeTextColor = darkMode === "dark" ? "#fff" : "#000";

  const [switchState, setSwitchState] = useState(false);
  const mainPrimaryColor = darkMode === "light" ? blue[600] : yellow[700];
  const mainSecondaryColor = darkMode === "light" ? red[600] : "#ff8f00";

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      text: {
        primary: themeTextColor,
      },
      typography: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
      },
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  useEffect(() => {
    const existingPreference = localStorage.getItem("darkMode");
    if (existingPreference) {
      existingPreference === "light"
        ? setDarkMode("light")
        : setDarkMode("dark");
    } else {
      setDarkMode("light");
      localStorage.setItem("darkMode", "light");
    }
  }, []);

  const handleThemeChange = () => {
    setSwitchState(switchState === true ? false : true);
    if (darkMode === "light") {
      setDarkMode("dark");
      localStorage.setItem("darkMode", "dark");
      localStorage.setItem("switchState", true);
    } else {
      setDarkMode("light");
      localStorage.setItem("darkMode", "light");
      localStorage.setItem("switchState", false);
    }
  };

  return (
    <CurrentUserProvider>
      <Paper>
        <ThemeProvider theme={darkTheme}>
          <Switch>
            <Route exact path="/login">
              <Login darkMode={darkMode} />
            </Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/insights">
              <InsightsContainer darkMode={darkMode} />
            </Route>
            <Route path="/settings">
              <Settings
                darkMode={darkMode}
                switchState={switchState}
                setDarkMode={setDarkMode}
                handleThemeChange={handleThemeChange}
              />
            </Route>
            <Route path="/">
              <Home darkMode={darkMode} />
            </Route>
          </Switch>
        </ThemeProvider>
      </Paper>
    </CurrentUserProvider>
  );
}

export default App;
