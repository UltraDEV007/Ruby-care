import { makeStyles } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "4% auto",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90vw",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "90vw",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "900px",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "1000px",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "60vw",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordion: {
    boxShadow: ({ themeState }) =>
      themeState === "light" ? "default" : `0px 0px 4px 1.2px ${indigo[50]}`,
    marginTop: "20px",
    marginBottom: "30px",
    background: ({ themeState }) => themeState === "light" && "#fff",
    border: ({ themeState }) => themeState === "light" && "1px solid #DBDBDB",
  },
}));
export { useStyles };
