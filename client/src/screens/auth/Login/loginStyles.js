import { yellow, grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    flexFlow: "nowrap",
    alignItems: "center",
    background: "#fff",
  },
  rootDark: {
    display: "flex",
    flexDirection: "column",
    flexFlow: "nowrap",
    alignItems: "center",
    background: grey[800],
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
  loginButton: {
    margin: "20px auto",
    padding: "20px",
    color: "#62B5D9",
    fontSize: "28px",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    textTransform: "capitalize",
  },
  loginButtonDark: {
    margin: "20px auto",
    padding: "20px",
    color: yellow[700],
    fontSize: "28px",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    textTransform: "capitalize",
  },
  register: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: "26px",
    textDecoration: "none",
    textAlign: "center",
  },
  registerDark: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: "26px",
    textDecoration: "none",
    color: "#fff",
    textAlign: "center",
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
  },
  userDark: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: "15px",
    textDecoration: "none",
    color: "#fff",
    padding: "20px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  registerLink: {
    textDecoration: "none",
    color: "#62B5D9",
  },
  registerLinkDark: {
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
  darkLabel: {
    color: "#fff",
    marginLeft: "10px",
  },
  label: {
    color: "#000",
    marginLeft: "10px",
  },
  darkPasswordLabel: {
    color: "#fff",
  },
  passwordLabel: {
    color: "#000",
  },
  userLoggedImage: {
    height: "130px",
    width: "130px",
    alignSelf: "center",
    marginBottom: "5px",
    marginTop: "20px",
    border: "1px solid white",
    borderRadius: "50%",
  },
});
export { useStyles };
