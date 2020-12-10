import { indigo } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

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
    boxShadow: ({ darkMode }) =>
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
  manage: {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    marginBottom: "20px",
    marginTop: "10px",
  },
}));

export { useStyles };
