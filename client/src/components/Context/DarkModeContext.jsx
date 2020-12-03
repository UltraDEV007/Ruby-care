import React, { useState, useEffect } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { yellow, red, blue } from "@material-ui/core/colors";

const DarkModeContext = React.createContext([{}, () => {}]);
function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState("");
  const palletType = darkMode === "dark" ? "dark" : "light";
  const themeTextColor = darkMode === "dark" ? "#fff" : "#000";

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

  // logic to maintaining darkMode in local storage from stack overflow
  // https://stackoverflow.com/questions/63097218/darkmode-store-in-local-storage-react-with-material-ui
  useEffect(() => {
    const existingPreference = localStorage.getItem("darkMode");
    if (existingPreference) {
      existingPreference === "light"
        ? setDarkMode("light")
        : setDarkMode("dark");
    } else {
      // if you want darkMode to be off by default, do
      // setDarkMode("light")
      setDarkMode("dark");
      // and then do localStorage.setItem("darkMode,"light")
      localStorage.setItem("darkMode", "dark");
    }
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
        {children}
      </DarkModeContext.Provider>
    </ThemeProvider>
  );
}

export { DarkModeContext, DarkModeProvider };
