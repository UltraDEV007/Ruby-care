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
import QueriedUsers from "./QueriedUsers";
import Moment from "react-moment";
import "moment-timezone";
import SearchBarLocation from "./SearchBarLocation";
import CurrentUserContainer from "./CurrentUserContainer";
import OpenNavBar from "./OpenNavBar";

export default function Header({ title, allUsers }) {
  const [leftSearch, setLeftSearch] = useState(false);
  const [middleSearch, setMiddleSearch] = useState(false);
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [search, setSearch] = useState("");
  const [darkMode] = useContext(DarkModeContext);
  const [{ currentUser }, dispatch] = useStateValue();
  const [isMenuShowing, setIsMenuShowing] = useState(false);

  const classes = useStyles({ darkMode, isMenuShowing });
  let location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  });

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

  const usersJSX = getUsers().map((user) => (
    <QueriedUsers darkMode={darkMode} user={user} />
  ));

  return (
    <>
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar>
            <div className={classes.headerLeft}>
              <LocationIcons classes={classes} location={location} />

              <Typography variant="h6" className={classes.title}>
                {title}
              </Typography>

              <SearchBarLocation
                setLeftSearch={setLeftSearch}
                setMiddleSearch={setMiddleSearch}
              />

              {leftSearch && (
                <HeaderSearch
                  usersJSX={usersJSX}
                  darkMode={darkMode}
                  search={search}
                  setSearch={setSearch}
                />
              )}
            </div>

            <div className={classes.headerCenter}>
              <Typography className={classes.timeClass}>
                <Moment format="hh:mm A">{currentTime}</Moment>
              </Typography>

              {middleSearch && (
                <HeaderSearch
                  className={classes.search}
                  open={isMenuShowing}
                  usersJSX={usersJSX}
                  darkMode={darkMode}
                  search={search}
                  setSearch={setSearch}
                />
              )}
            </div>

            <div className={classes.headerRight}>
              <CurrentUserContainer
                currentUser={currentUser}
                Typography={Typography}
                Link={Link}
                darkMode={darkMode}
                classes={classes}
                AccountCircleIcon={AccountCircleIcon}
                handleLogout={handleLogout}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <OpenNavBar isMenuShowing={open} />
    </>
  );
}
