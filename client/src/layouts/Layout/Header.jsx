import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import { CurrentUserContext } from "../../components/Context/CurrentUserContext";
import { DarkModeContext } from "../../components/Context/DarkModeContext";
import { removeToken } from "../../services/auth";
import { useHistory, Link, useLocation } from "react-router-dom";
import ForumIcon from "@material-ui/icons/Forum";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

export default function Header({ title }) {
  let location = useLocation();
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: "20px",
      height: "100px",
    },
    appBar: {
      marginBottom: "20px",
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 0.5,
    },
    timeClass: {
      flexGrow: location.pathname === "/settings" ? 5.5 : 0.5,
      textAlign: location.pathname === "/settings" ? "center" : "default",
    },
    userName: {
      display: "flex",
      alignItems: "center",
      marginRight: "20px",
      transition: "transform 350ms ease-in-out",
      "&:hover": {
        transition: "transform 300ms ease-in-out",
        cursor: "pointer",
        transform: "scale(1.2)",
      },
    },
    userIcon: {
      marginRight: "10px",
    },
    logOut: {
      marginLeft: "20px",
      padding: "20px",
      transition: "transform 350ms ease-out",
      "&:hover": {
        transition: "transform 300ms ease-in",
        cursor: "pointer",
        transform: "scale(1.2)",
      },
    },
  }));
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  const [darkMode] = useContext(DarkModeContext);

  const history = useHistory();
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/login");
  };

  const classes = useStyles();
  let time = new Date();
  let timeWithoutSeconds = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

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
          <Typography className={classes.timeClass}>
            {timeWithoutSeconds}
          </Typography>
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
          {location.pathname === "/settings" ? (
            <Typography className={classes.logOut} onClick={handleLogout}>
              Log out
            </Typography>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
