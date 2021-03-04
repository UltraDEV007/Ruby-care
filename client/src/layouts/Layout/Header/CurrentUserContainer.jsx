import { useContext } from "react";
import { Typography } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useHistory, useLocation, Link } from "react-router-dom";
import { useStateValue } from "../../../context/CurrentUserContext";
import { ThemeStateContext } from "../../../context/ThemeStateContext";
import { useStyles } from "./headerStyles";
import { removeToken } from "../../../services/auth";
import LogoutIcon from "@material-ui/icons/ExitToApp";

function CurrentUserContainer({ isMenuShowing }) {
  const [{ currentUser }, dispatch] = useStateValue();
  const { pathname } = useLocation();
  const history = useHistory();
  const handleLogout = () => {
    dispatch({ type: "REMOVE_USER" });
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/login");
  };

  const classes = useStyles();
  const [themeState] = useContext(ThemeStateContext);

  return (
    <>
      {currentUser ? (
        <>
          <Typography
            component={Link}
            style={
              themeState === "light"
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
      {pathname === "/settings" && !isMenuShowing && (
        <Typography className={classes.logOut} onClick={handleLogout}>
          Log out
        </Typography>
      )}
      {isMenuShowing && (
        <>
          <br />
          <Typography onClick={handleLogout} className={classes.logOutBurger}>
            <LogoutIcon className={classes.userIcon} />
            Log out
          </Typography>
        </>
      )}
    </>
  );
}

export default CurrentUserContainer;
