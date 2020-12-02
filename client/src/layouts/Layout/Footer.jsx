import { useState, useContext } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import HomeIcon from "@material-ui/icons/Home";
import ForumIcon from "@material-ui/icons/Forum";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { indigo, blue } from "@material-ui/core/colors";
import { DarkModeContext } from "../../Context/DarkMode/DarkModeContext";

function Footer() {
  const [darkMode] = useContext(DarkModeContext);
  const useStyles = makeStyles({
    root: {
      width: "100vw",
      position: "fixed",
      bottom: 0,
      marginTop: "20px",
      boxShadow:
        darkMode === "dark"
          ? `2px 2px 3px 2px ${indigo[50]}`
          : `2px 2px 3px 2px ${blue[600]}`,
    },
    footer: {
      height: "50px",
      marginTop: "20px",
    },
  });
  const classes = useStyles();
  const history = useHistory();

  const routerMap = {
    0: "/",
    1: "/insights",
    2: "/settings",
  };
  const [value, setValue] = useState(() => {
    if (history.location.pathname === "/insights") {
      return 1;
    } else if (history.location.pathname === "/settings") {
      return 2;
    } else {
      return 0;
    }
  });

  return (
    <>
      <div className={classes.footer}>
        <BottomNavigation
          value={value}
          onChange={(_event, newValue) => {
            history.push(routerMap[newValue]);
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Insights" icon={<ForumIcon />} />
          <BottomNavigationAction label="Settings" icon={<MoreHorizIcon />} />
        </BottomNavigation>
      </div>
    </>
  );
}

export default Footer;
