import React, { useState, createContext } from "react";
import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core/styles";
import { yellow, red, blue } from "@material-ui/core/colors";

const ThemeStateContext = createContext();

function ThemeStateProvider({ children }) {
  const [themeState, setThemeState] = useState(() => {
    const localTheme = localStorage.getItem("themeState");
    if (localTheme !== null) {
      return localTheme.match(/^dark$/i) ? "dark" : "light";
    } else {
      localStorage.setItem("themeState", "dark");
      return "dark";
    }
  }); // handleThemeChange in src/screens/main/Settings.jsx lines 87-99;

  const palletType = themeState === "dark" ? "dark" : "light";
  const themeTextColor = themeState === "dark" ? "#fff" : "#000";

  const mainPrimaryColor = themeState === "light" ? blue[600] : yellow[700];
  const mainSecondaryColor = themeState === "light" ? red[600] : "#ff8f00";
  const bgColor = themeState === "light" ? "#FAFAFA" : "#424242";

  const handleTheme = createMuiTheme({
    palette: {
      background: {
        paper: bgColor,
        default: bgColor,
      },
      type: palletType,
      text: {
        primary: themeTextColor,
      },
      input: {
        "&::placeholder": {
          primary: themeTextColor,
        },
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

  return (
    <ThemeProvider theme={handleTheme}>
      <ThemeStateContext.Provider value={[themeState, setThemeState]}>
        {children}
      </ThemeStateContext.Provider>
    </ThemeProvider>
  );
}

export { ThemeStateContext, ThemeStateProvider };
