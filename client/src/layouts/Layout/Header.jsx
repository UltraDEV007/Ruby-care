import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import { CurrentUserContext } from "../../CurrentUser/CurrentUserContext";
import { removeToken } from "../../services/auth";
import { useHistory, Link, useLocation } from "react-router-dom";
import ForumIcon from "@material-ui/icons/Forum";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

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
    // marginRight: "20px",
    flexGrow: 0.5,
  },
  userName: {
    display: "flex",
    alignItems: "center",
    marginRight: "20px",
  },
  userIcon: {
    marginRight: "10px",
  },
  logOut: {
    marginLeft: "20px",
  },
}));

export default function Header({ title }) {
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
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

  let location = useLocation();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          {location.pathname === "/" ? (
            <HomeIcon className={classes.menuButton} />
          ) : location.pathname === "/insights" ||
            "/insights/new" ||
            "insights/:id/edit" ? (
            <ForumIcon className={classes.menuButton} />
          ) : location.pathname === "/settings" ? (
            <MoreHorizIcon className={classes.menuButton} />
          ) : (
            <></>
          )}

          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Typography className={classes.timeClass}>
            {timeWithoutSeconds}
          </Typography>
          {currentUser ? (
            <>
              <Typography className={classes.userName}>
                <AccountCircleIcon className={classes.userIcon} />
                {currentUser?.name}
              </Typography>
            </>
          ) : (
            <Link style={{ textDecoration: "none" }} to="/login">
              <Typography style={{ color: "white" }}>Login/Register</Typography>
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
