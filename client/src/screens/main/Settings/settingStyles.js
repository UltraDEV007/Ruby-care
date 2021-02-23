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
    boxShadow: ({ themeState }) =>
      themeState === "light" ? "default" : `0px 0px 4px 1.2px ${indigo[50]}`,
    marginTop: "20px",
    marginBottom: "30px",
    background: ({ themeState }) => themeState === "light" && "#fff",
    border: ({ themeState }) => themeState === "light" && "1px solid #DBDBDB",
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
  themeStateContainer: {
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
  userImage: {
    height: "150px",
    width: "150px",
    alignSelf: "center",
    margin: "20px",
    border: (props) =>
      props.themeState === "dark" ? "1px solid white" : "1px solid #000",
    borderRadius: "50%",
    objectFit: "cover",
  },
}));

export { useStyles };
