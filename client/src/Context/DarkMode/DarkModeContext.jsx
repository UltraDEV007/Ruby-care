import React, { useState, useEffect } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { yellow, red, blue } from "@material-ui/core/colors";

const DarkModeContext = React.createContext([{}, () => {}]);

function DarkModeProvider(props) {
  const [darkMode, setDarkMode] = useState("light");
  const palletType = darkMode === "dark" ? "dark" : "light";
  const themeTextColor = darkMode === "dark" ? "#fff" : "#000";

  // const [switchState, setSwitchState] = useState(false);
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

  // const handleThemeChange = () => {
  //   setSwitchState(switchState === true ? false : true);
  //   if (darkMode === "light") {
  //     setDarkMode("dark");
  //     localStorage.setItem("darkMode", "dark");
  //     localStorage.setItem("switchState", true);
  //   } else {
  //     setDarkMode("light");
  //     localStorage.setItem("darkMode", "light");
  //     localStorage.setItem("switchState", false);
  //   }
  // };

  return (
    <ThemeProvider theme={darkTheme}>
      <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
        {props.children}
      </DarkModeContext.Provider>
    </ThemeProvider>
  );
}

export { DarkModeContext, DarkModeProvider };
