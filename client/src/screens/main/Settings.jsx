import { makeStyles } from "@material-ui/core/styles";
import Layout from "../../layouts/Layout/Layout";
import Switch from "@material-ui/core/Switch";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../../components/Context/CurrentUserContext";
import { DarkModeContext } from "../../components/Context/DarkModeContext";
import Moment from "react-moment";
import "moment-timezone";

const useStyles = makeStyles(() => ({
  root: {
    width: "95vw",
    margin: "0 auto",
  },
  card: {
    display: "flex",
  },
  actionsContainer: {
    display: "flex",
  },
}));

export default function Settings() {
  const classes = useStyles();
  const [currentUser] = useContext(CurrentUserContext);
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const [switchState, setSwitchState] = useState(false);

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
      <div className={classes.userContainer}>
        <Typography className={classes.title}>{currentUser?.name}</Typography>
        <Typography className={classes.title}>{currentUser?.email}</Typography>
        <Typography>
          Joined&nbsp;
          <Moment format="MM/DD/yyyy">{userDate}</Moment>
        </Typography>
      </div>
      <div className={classes.root}>
        <Typography>Preferences</Typography>
        <Card className={classes.card}>
          <CardActions className={classes.actionsContainer}>
            <Typography className={classes.typography}>Dark mode</Typography>
            <Switch
              className={classes.darkModeSwitch}
              checked={switchState}
              onChange={handleThemeChange}
            />
          </CardActions>
        </Card>
      </div>
    </Layout>
  );
}
