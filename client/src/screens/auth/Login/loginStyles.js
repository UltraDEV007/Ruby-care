import { yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    flexFlow: "nowrap",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "20px",
    marginBottom: (props) => (props.currentUser ? "-10px" : "20px"),
  },
  title: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: "36px",
    padding: "15px",
    marginTop: "10px",
    textShadow: "0.5px 4px 10px #999",
    color: (props) => props.themeState === "dark" && yellow[700],
  },
  logo: {
    maxWidth: "100px",
    maxHeight: "100px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  loginButton: {
    margin: "20px auto",
    padding: "20px",
    color: (props) => (props.themeState === "light" ? "#62B5D9" : yellow[700]),
    fontSize: "28px",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    textTransform: "capitalize",
  },
  register: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: "26px",
    textDecoration: "none",
    textAlign: "center",
    color: ({ themeState }) => themeState === "dark" && "#fff",
  },
  user: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: "15px",
    textDecoration: "none",
    padding: "20px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color: (props) => props.themeState === "dark" && "#fff",
  },
  registerLink: {
    textDecoration: "none",
    color: (props) => (props.themeState === "light" ? "#62B5D9" : yellow[700]),
  },
  inputField: {
    color: (props) => (props.themeState === "light" ? "black" : "white"),
    marginBottom: "20px",
    width: "300px",
    marginLeft: "10px",
  },
  passwordField: {
    color: ({ themeState }) => (themeState === "light" ? "black" : "white"),
    marginBottom: "20px",
    width: "300px",
  },
  lockIcon: {
    marginRight: "10px",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    color: ({ themeState }) => (themeState === "light" ? "black" : "white"),
  },
  label: {
    color: (props) => (props.themeState === "light" ? "#000" : "#fff"),
    marginLeft: "10px",
  },
  passwordLabel: {
    color: ({ themeState }) => (themeState === "light" ? "#000" : "#fff"),
  },
  userLoggedImage: {
    height: "130px",
    width: "130px",
    alignSelf: "center",
    marginBottom: "5px",
    marginTop: "20px",
    border: ({ themeState }) =>
      themeState === "dark" ? "1px solid white" : "1px solid #000",
    borderRadius: "50%",
  },
  visibility: {
    color: (props) => (props.themeState === "dark" ? "#fff" : "#000"),
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    transition: "transform 250ms ease-in-out",
    "&:hover": {
      transition: "transform 250ms ease-in-out",
      cursor: "pointer",
      transform: "scale(1.005)",
    },
  },
});
export { useStyles };
