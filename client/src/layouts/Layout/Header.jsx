import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import HomeIcon from "@material-ui/icons/Home";
import { CurrentUserContext } from "../../CurrentUser/CurrentUserContext";
import { removeToken } from "../../services/auth";
import { useHistory, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "20px",
    height: "100px",
  },
  appBar: {
    // height: '60px',
    marginBottom: "20px",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  timeClass: {
    marginRight: "20px",
  },
}));

export default function Header({ title, darkMode, setDarkMode }) {
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

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <HomeIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Typography className={classes.timeClass}>
            {timeWithoutSeconds}
          </Typography>
          {/* <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            /> */}
          {currentUser ? (
            <>
              <Typography>{currentUser.name}</Typography>
              <Button onClick={handleLogout}>
                <Typography style={{ color: "white" }}>Logout</Typography>
              </Button>
            </>
          ) : (
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button>
                <Typography style={{ color: "white" }}>
                  Login/Register
                </Typography>
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
