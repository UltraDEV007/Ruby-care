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
import Community from "./screens/main/Community/Community";
import Settings from "./screens/main/Settings/Settings";

function App() {
  const [darkMode, setDarkMode] = useState("light");
  const palletType = darkMode === "dark" ? "dark" : "light";
  const [switchState, setSwitchState] = useState();
  const [mainPrimaryColor, setMainPrimaryColor] = useState(blue[600]);
  const [mainSecondaryColor, setMainSecondaryColor] = useState(red[600]);
  // darkmode is now saved in local storage, but the main and priamry colors need fixing on refresh.
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
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
      setMainPrimaryColor(yellow[700]);
      setMainSecondaryColor("#ff8f00");
      localStorage.setItem("darkMode", "dark");
      localStorage.setItem("switchState", true);
    } else {
      setDarkMode("light");
      setMainSecondaryColor(red[600]);
      setMainPrimaryColor(blue[600]);
      localStorage.setItem("darkMode", "light");
      localStorage.setItem("switchState", false);
    }
  };

  return (
    <CurrentUserProvider>
      <Paper>
        <ThemeProvider theme={darkTheme}>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/community" component={Community} />
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
