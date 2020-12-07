import { makeStyles } from "@material-ui/core/styles";
import Layout from "../../layouts/Layout/Layout";
import Switch from "@material-ui/core/Switch";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { useContext, useState } from "react";
import { indigo } from "@material-ui/core/colors";
import { CurrentUserContext } from "../../components/Context/CurrentUserContext";
import { DarkModeContext } from "../../components/Context/DarkModeContext";
import Moment from "react-moment";
import "moment-timezone";
import ScrollToTopOnMount from "../../components/Helpers/ScrollToTopOnMount";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { getAge } from "../../utils/getAge";
export default function Settings() {
  const [currentUser] = useContext(CurrentUserContext);
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: "0 auto",
      [theme.breakpoints.down("xs")]: {
        maxWidth: "89vw",
      },
      [theme.breakpoints.up("sm")]: {
        maxWidth: "72.5vw",
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: "600px",
      },
      [theme.breakpoints.up("xl")]: {
        maxWidth: "41.5vw",
      },
    },
    categories: {
      textAlign: "center",
      padding: "20px",
      fontSize: "1.5rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.7rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "2.2rem",
      },
    },
    accountTitle: {
      textAlign: "center",
      fontSize: "1.5rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.7rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "2.2rem",
      },
    },
    card: {
      display: "flex",
      boxShadow:
        darkMode === "light" ? "default" : `0px 0px 4px 1.2px ${indigo[50]}`,
      marginTop: "20px",
      marginBottom: "30px",
    },
    actionsContainer: {
      display: "flex",
      width: "100%",
      padding: "10px",
      justifyContent: "space-between",
    },
    userContainer: {
      display: "flex",
      alignSelf: "center",
      justifyContent: "center",
      flexDirection: "column",
      margin: "0 auto",
      textAlign: "center",
      padding: "20px",
    },
    darkModeContainer: {
      display: "flex",
      alignItems: "center",
    },
  }));
  const classes = useStyles();

  const [switchState, setSwitchState] = useState(() => {
    let state = localStorage.getItem("switchState");

    if (state !== null) {
      return state === "true" ? true : false;
    }
    return false;
  });

  const handleThemeChange = () => {
    setSwitchState(switchState === true ? false : true);

    if (darkMode === "light") {
      setDarkMode("dark");
      localStorage.setItem("darkMode", "dark");
      localStorage.setItem("switchState", true);
    } else {
      setDarkMode("light");
      localStorage.setItem("darkMode", "light");
      localStorage.setItem("switchState", false);
    }
  };

  const userDate = currentUser?.created_at?.toLocaleString();
  return (
    <Layout title="Settings">
      <ScrollToTopOnMount />
      <div className={classes.userContainer}>
        <Typography className={classes.accountTitle}>Your Account</Typography>
        <Typography className={classes.userText}>
          <strong>Name:</strong>&nbsp;{currentUser?.name}
        </Typography>
        <Typography className="age">
          <strong>Age:</strong>&nbsp;
          {getAge(currentUser?.birthday.toLocaleString())}
        </Typography>
        <Typography className={classes.userText}>
          <strong>Gender:</strong>&nbsp;{currentUser?.gender}
        </Typography>
        <Typography className={classes.userText}>
          <strong>Email:</strong>&nbsp;{currentUser?.email}
        </Typography>
        <Typography>
          <strong>Joined:</strong>&nbsp;
          <Moment format="dddd, MMMM Do yyyy">{userDate}</Moment>
        </Typography>
      </div>
      <hr />
      <br />
      <div className={classes.root}>
        <Typography className={classes.categories}>Preferences</Typography>
        <div className="card-actions">
          <Card className={classes.card}>
            <CardActions className={classes.actionsContainer}>
              <Typography className={classes.darkModeContainer}>
                <Brightness4Icon className={classes.darkModeIcon} />
                &nbsp;Dark mode
              </Typography>
              <Switch
                className={classes.darkModeSwitch}
                checked={switchState}
                onChange={handleThemeChange}
              />
            </CardActions>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
