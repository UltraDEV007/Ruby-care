import { yellow, grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexFlow: "nowrap",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  rootDark: {
    display: "flex",
    flexDirection: "column",
    flexFlow: "nowrap",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    background: grey[800],
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "20px",
    marginBottom: "20px",
  },
  title: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: "36px",
    padding: "15px",
    marginTop: "10px",
    textShadow: "0.5px 4px 10px #999",
  },
  titleDark: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: "36px",
    padding: "15px",
    marginTop: "10px",
    textShadow: "0.5px 4px 10px #999",
    color: yellow[700],
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
  registerButton: {
    margin: "20px auto",
    padding: "20px",
    color: "#62B5D9",
    fontSize: "28px",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    textTransform: "capitalize",
  },
  registerButtonDark: {
    margin: "20px auto",
    padding: "20px",
    color: yellow[700],
    fontSize: "28px",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    textTransform: "capitalize",
  },
  user: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: "15px",
    textDecoration: "none",
    marginLeft: "40px",
    marginBottom: "20px",
  },
  userDark: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: "15px",
    textDecoration: "none",
    color: "#fff",
    marginBottom: "20px",
    marginLeft: "40px",
  },
  darkLabel: {
    color: "#fff",
    marginLeft: "10px",
  },
  label: {
    color: "#000",
    marginLeft: "10px",
  },
  login: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: "26px",
    textDecoration: "none",
    color: "#000",
    textAlign: "center",
  },
  loginDark: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: "26px",
    textDecoration: "none",
    color: "#fff",
    textAlign: "center",
  },
  loginLink: {
    textDecoration: "none",
    color: "#62B5D9",
  },
  loginLinkDark: {
    textDecoration: "none",
    color: yellow[700],
  },
  inputField: {
    color: "black",
    marginBottom: "20px",
    width: "300px",
    marginLeft: "10px",
  },
  inputFieldDark: {
    color: "#fff",
    marginBottom: "20px",
    width: "300px",
    marginLeft: "10px",
  },
  birthdayField: {
    color: "black",
    marginBottom: "20px",
    width: "300px",
    marginLeft: "0",
  },
  birthdayFieldDark: {
    color: "#fff",
    marginBottom: "20px",
    width: "300px",
    marginLeft: "0",
  },
  passwordField: {
    color: "black",
    marginBottom: "20px",
    width: "300px",
  },
  passwordFieldDark: {
    color: "#fff",
    marginBottom: "20px",
    width: "300px",
  },
  lockIcon: {
    marginRight: "10px",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    color: "black",
  },
  inputContainerDark: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
  },
  darkPasswordLabel: {
    color: "#fff",
  },
  passwordLabel: {
    color: "#000",
  },
}));
export { useStyles };
