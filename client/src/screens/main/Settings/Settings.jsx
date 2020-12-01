import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../../../layouts/Layout/Layout";
import Switch from "@material-ui/core/Switch";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme) => ({
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

export default function Settings({ darkMode, setDarkMode }) {
  const classes = useStyles();

  return (
    <Layout title="Settings">
      <div className={classes.root}>
        <Typography>Preferences</Typography>
        <Card className={classes.card}>
          <CardActions className={classes.actionsContainer}>
            <Typography className={classes.typography}>Dark mode</Typography>
            <Switch
              className={classes.darkModeSwitch}
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </CardActions>
        </Card>
      </div>
    </Layout>
  );
}
