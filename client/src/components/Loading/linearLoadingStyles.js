import { makeStyles } from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    background: (props) => (props.themeState === "light" ? "#fff" : grey[700]),
  },
  "@keyframes float": {
    "0%": {
      boxShadow: "none",
      transform: "translatey(0px)",
    },
    "50%": {
      boxShadow: "none",
      transform: "translatey(-20px)",
    },
    "100%": {
      boxShadow: "none",
      transform: "translatey(0px)",
    },
  },
  contentContainer: {
    display: "flex",
    flexFlow: "column wrap",
    margin: "10% auto",
    [theme.breakpoints.down("md")]: {
      margin: "20% auto",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "30% auto",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "50% auto",
    },
  },
  loadingWrapper: {
    display: "flex",
    flexFlow: "column nowrap",
    minHeight: "100vh",
    maxHeight: "100%",
    background: ({ themeState }) =>
      themeState === "dark" ? grey[800] : "#fff",
  },
  loadingLogoDiv: {
    display: "flex",
    justifySelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    animation: "$float 6s ease-in-out infinite",
  },
  loadingTitle: {
    fontSize: "2rem",
    marginTop: "20px",
  },
  logo: {
    width: "200px",
    margin: "20px",
    [theme.breakpoints.down("xs")]: {
      width: "100px",
    },
  },
}));
export { useStyles };
