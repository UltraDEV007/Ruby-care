import { yellow, grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexFlow: "nowrap",
    alignItems: "center",
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
    marginBottom: (props) => (props.currentUser ? "-10px" : "0"),
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
    padding: (props) => (props.currentUser ? "20px" : "20px"),
    color: "#62B5D9",
    fontSize: "28px",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    textTransform: "capitalize",
  },
  registerButtonDark: {
    padding: (props) => (props.currentUser ? "20px" : "20px"),
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
    marginBottom: (props) => (props.currentUser ? "5px" : "20px"),
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
    marginBottom: (props) => (props.currentUser ? "5px" : "20px"),
    marginLeft: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
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
  alert: {
    color: "red",
    textAlign: "center",
  },
  middleWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  userImage: {
    height: "40px",
    width: "40px",
    borderRadius: "40px",
  },
  bigIcon: {
    height: "100px",
    width: "100px",
    alignSelf: "center",
    marginBottom: "5px",
    border: (props) => props.imagePreview && "1px solid white",
    borderRadius: (props) => props.imagePreview && "50%",
  },
  bigUserImage: {
    height: "100px",
    width: "100px",
    alignSelf: "center",
    marginBottom: "5px",
    border: "1px solid white",
    borderRadius: "50%",
  },
  cameraIcon: {
    cursor: "pointer",
  },
  crossIcon: {
    cursor: "pointer",
  },
  visibility: {
    color: (props) => (props.darkMode === "dark" ? "#fff" : "#000"),
  },
  passwordIcon: {
    marginRight: "-10px",
  },
  genderContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  iconButton: {
    margin: "-25px",
  },
}));
export { useStyles };
