import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ForumIcon from "@material-ui/icons/Forum";
import SettingsIcon from "@material-ui/icons/Settings";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

function LocationIcons({ classes, location }) {
  return (
    <>
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
    </>
  );
}

export default LocationIcons;
