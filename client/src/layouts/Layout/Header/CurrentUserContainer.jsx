import React from "react";
import { useLocation } from "react-router-dom";

function CurrentUserContainer({
  currentUser,
  handleLogout,
  classes,
  Typography,
  Link,
  darkMode,
  AccountCircleIcon,
}) {
  const { pathname } = useLocation();

  return (
    <>
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
            className={classes.userName}>
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
        <Link className={classes.text} to="/login">
          <Typography className={classes.text}>Login/Register</Typography>
        </Link>
      )}
      {pathname === "/settings" && (
        <Typography className={classes.logOut} onClick={handleLogout}>
          Log out
        </Typography>
      )}
    </>
  );
}

export default CurrentUserContainer;
