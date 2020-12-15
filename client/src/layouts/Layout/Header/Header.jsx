import React, { useContext, useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import { useStateValue } from "../../../components/Context/CurrentUserContext";
import { DarkModeContext } from "../../../components/Context/DarkModeContext";
import { removeToken } from "../../../services/auth";
import { useHistory, Link, useLocation } from "react-router-dom";
import ForumIcon from "@material-ui/icons/Forum";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { useStyles } from "./headerStyles";

export default function Header({ title }) {
  let time = new Date();
  let timeWithoutSeconds = time.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const [value, setValue] = useState(timeWithoutSeconds);

  useEffect(() => {
    const interval = setInterval(() => setValue(timeWithoutSeconds), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeWithoutSeconds]);

  let location = useLocation();

  const [darkMode] = useContext(DarkModeContext);
  const [{ currentUser }, dispatch] = useStateValue();

  const history = useHistory();
  const handleLogout = () => {
    dispatch({ type: "REMOVE_USER" });
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/login");
  };

  const classes = useStyles({ location });

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          {location.pathname === "/" ? (
            <HomeIcon className={classes.menuButton} />
          ) : location.pathname === "/insights" ? (
            <ForumIcon className={classes.menuButton} />
          ) : location.pathname === "/users" ? (
            <SupervisedUserCircleIcon className={classes.menuButton} />
          ) : location.pathname === "/settings" ? (
            <SettingsIcon className={classes.menuButton} />
          ) : (
            <HomeIcon className={classes.menuButton} />
          )}

          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Typography className={classes.timeClass}>{value}</Typography>
          {currentUser ? (
            <>
              <Typography
                component={Link}
                style={
                  darkMode === "light"
                    ? { textDecoration: "none", color: "#fff" }
                    : { textDecoration: "none", color: "#000" }
                }
                to={`/users/${currentUser?.id}`}
                className={classes.userName}
              >
                <AccountCircleIcon className={classes.userIcon} />
                {currentUser?.name}
              </Typography>
            </>
          ) : (
            <Link style={{ textDecoration: "none" }} to="/login">
              <Typography
                style={
                  darkMode === "dark" ? { color: "#000" } : { color: "#fff" }
                }
              >
                Login/Register
              </Typography>
            </Link>
          )}
          {location.pathname === "/settings" && (
            <Typography className={classes.logOut} onClick={handleLogout}>
              Log out
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
