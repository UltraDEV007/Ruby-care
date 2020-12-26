import React, { useContext, useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useStateValue } from "../../../components/Context/CurrentUserContext";
import { DarkModeContext } from "../../../components/Context/DarkModeContext";
import { removeToken } from "../../../services/auth";
import { useHistory, Link, useLocation } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useStyles } from "./headerStyles";
import HeaderSearch from "./HeaderSearch";
import LocationIcons from "./LocationIcons";

export default function Header({ title, allUsers }) {
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
  const [search, setSearch] = useState("");
  const [{ currentUser }, dispatch] = useStateValue();
  const classes = useStyles({ location });

  const history = useHistory();
  const handleLogout = () => {
    dispatch({ type: "REMOVE_USER" });
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/login");
  };

  const getUsers = () =>
    allUsers.filter((user) =>
      user.name.toLowerCase().includes(`${search}`.toLowerCase())
    );

  const queriedUsers = getUsers().map((user) => (
    <Link
      key={user.id}
      darkMode={darkMode}
      to={`/users/${user.id}`}
      className="link"
    >
      {!user?.image ? (
        <AccountCircleIcon className={classes.userIcon} />
      ) : (
        <img className="user-image" src={user?.image} alt={user?.name} />
      )}
      <h1>{user?.name}</h1>
    </Link>
  ));

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <LocationIcons classes={classes} location={location} />

          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Typography className={classes.timeClass}>{value}</Typography>
          <HeaderSearch search={search} setSearch={setSearch} />
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
                {!currentUser?.image ? (
                  <AccountCircleIcon className={classes.userIcon} />
                ) : (
                  <img
                    className={classes.userImage}
                    src={currentUser?.image}
                    alt={currentUser?.name}
                  />
                )}
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
