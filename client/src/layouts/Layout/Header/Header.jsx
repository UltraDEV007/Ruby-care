import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";

// Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HeaderSearch from "./HeaderSearch";
import CurrentUserContainer from "./CurrentUserContainer";

// Context
import { ThemeStateContext } from "../../../context/ThemeStateContext";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

// Icons
import { useStyles } from "./headerStyles";
import LocationIcons from "./LocationIcons";

// Helpers
// $TODO: use Material-UI useMediaQuery instead of this useEffect
import HandleResizeEvents from "./HandleResizeEvents";

// Views
import QueriedUsers from "./QueriedUsers";
import Burger from "./Burger";

export default function Header({ title, allUsers }) {
  const [leftSearch, setLeftSearch] = useState(false);
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [search, setSearch] = useState("");
  const [themeState] = useContext(ThemeStateContext);
  const [isMenuShowing, setIsMenuShowing] = useState(false);

  const classes = useStyles({ themeState, isMenuShowing });
  let location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  });

  const getQueriedUsers = () =>
    allUsers.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );

  const usersJSX = getQueriedUsers()
    .slice(0, 6)
    .map((user) => <QueriedUsers themeState={themeState} user={user} />);

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

              <HandleResizeEvents
                setLeftSearch={setLeftSearch}
                setIsMenuShowing={setIsMenuShowing}
                isMenuShowing={isMenuShowing}
              />

              {leftSearch && (
                <HeaderSearch
                  usersJSX={usersJSX}
                  themeState={themeState}
                  search={search}
                  setSearch={setSearch}
                />
              )}
            </div>

            <div className={classes.headerCenter}>
              <Typography className={classes.timeClass}>
                <Moment format="hh:mm A">{currentTime}</Moment>
              </Typography>
            </div>

            <div className={classes.headerRight}>
              <div className={classes.userContainer}>
                <CurrentUserContainer
                  Typography={Typography}
                  Link={Link}
                  themeState={themeState}
                  classes={classes}
                  AccountCircleIcon={AccountCircleIcon}
                />
              </div>
              <Burger
                open={isMenuShowing}
                setOpen={setIsMenuShowing}
                setSearch={setSearch}
                search={search}
                usersJSX={usersJSX}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
