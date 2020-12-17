import { yellow, indigo, blue, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px auto",
    minWidth: "300px",
    width: "300px",
    minHeight: "240px",
    padding: "20px",
    borderRadius: 0,
    boxShadow: (props) =>
      props.darkMode === "light"
        ? "default"
        : `-1px .5px 4px 2.5px ${indigo[50]}`,
    [theme.breakpoints.up("md")]: {
      minWidth: "350px",
      width: "350px",
      padding: "20px",
      margin: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      minWidth: "500px",
      width: "500px",
      padding: "30px",
      margin: "20px",
    },
    [theme.breakpoints.up("xl")]: {
      minWidth: "550px",
      width: "550px",
      padding: "30px",
      margin: "20px",
    },
  },
  link: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    transition: "transform 250ms ease-in-out",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: ({ darkMode }) =>
        darkMode === "dark" ? yellow[700] : blue[600],
      transition: "transform 250ms ease-in-out",
      cursor: "pointer",
      transform: "scale(1.02)",
    },
  },

  title: {
    color: (props) => (props.darkMode === "dark" ? yellow[700] : blue[600]),
    fontWeight: "bold",
    fontSize: "24px",
  },
  userContainer: {
    display: "flex",
    padding: "10px 0 3px 0",
    alignItems: "center",
    transition: "transform 250ms ease-in-out",
    "&:hover": {
      transition: "transform 250ms ease-in-out",
      cursor: "pointer",
      transform: "scale(1.005)",
    },
  },
  userName: {
    color: ({ darkMode }) => (darkMode === "dark" ? yellow[700] : blue[600]),
    fontWeight: "bold",
    fontSize: "19px",
  },
  userIcon: {
    color: ({ darkMode }) => (darkMode === "dark" ? yellow[700] : blue[600]),
    marginRight: "8px",
  },
  buttons: {
    marginTop: "20px",
  },
  delete: {
    marginLeft: "20px",
  },
  date: {
    paddingTop: "5px",
    paddingBottom: "10px",
  },
  likeContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  likedInsight: {
    color: ({ darkMode }) => (darkMode === "dark" ? yellow[700] : red[500]),
    cursor: "pointer",
  },
  unLikedInsight: {
    cursor: "pointer",
  },
}));

export { useStyles };
