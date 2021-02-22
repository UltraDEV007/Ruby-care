import React, { useState, createContext } from "react";
import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core/styles";
import { yellow, red, blue } from "@material-ui/core/colors";
const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const themeState = localStorage.getItem("darkMode");
    if (themeState) {
      return themeState === "light" ? "light" : "dark";
    }
    localStorage.setItem("darkMode", "light");
    return "light";
  }); // handleThemeChange in src/screens/main/Settings.jsx lines 87-99;

  const palletType = darkMode === "dark" ? "dark" : "light";
  const themeTextColor = darkMode === "dark" ? "#fff" : "#000";

  const mainPrimaryColor = darkMode === "light" ? blue[600] : yellow[700];
  const mainSecondaryColor = darkMode === "light" ? red[600] : "#ff8f00";
  const bgColor = darkMode === "light" ? "#FAFAFA" : "#424242";

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
      <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
        {children}
      </DarkModeContext.Provider>
    </ThemeProvider>
  );
}

export { DarkModeContext, DarkModeProvider };
