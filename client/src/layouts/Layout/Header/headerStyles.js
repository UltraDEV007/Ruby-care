import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "20px",
    height: "100px",
  },
  appBar: {
    marginBottom: "20px",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 0.5,
  },
  timeClass: {
    flexGrow: ({ location }) => (location.pathname === "/settings" ? 5.5 : 0.5),
    textAlign: ({ location }) =>
      location.pathname === "/settings" ? "center" : "default",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    marginRight: "20px",
    transition: "transform 350ms ease-in-out",
    "&:hover": {
      transition: "transform 300ms ease-in-out",
      cursor: "pointer",
      transform: "scale(1.2)",
    },
  },
  userIcon: {
    marginRight: "10px",
  },
  userImage: {
    height: "40px",
    width: "40px",
    borderRadius: "40px",
    marginRight: "10px",
  },
  logOut: {
    marginLeft: "20px",
    padding: "20px",
    transition: "transform 350ms ease-out",
    "&:hover": {
      transition: "transform 300ms ease-in",
      cursor: "pointer",
      transform: "scale(1.2)",
    },
  },
}));

export { useStyles };
