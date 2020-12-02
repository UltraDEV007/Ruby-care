import { useState, useContext } from "react";
import { CurrentUserContext } from "../../Context/CurrentUser/CurrentUserContext";
import { DarkModeContext } from "../../Context/DarkMode/DarkModeContext";
import { registerUser } from "../../services/auth";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { yellow, grey } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    flexFlow: "wrap",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  rootDark: {
    display: "flex",
    flexDirection: "column",
    flexFlow: "wrap",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    background: grey[900],
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
  },
  loginDark: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: "26px",
    textDecoration: "none",
    color: "#fff",
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
});

export default function Register() {
  const [, setCurrentUser] = useContext(CurrentUserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode] = useContext(DarkModeContext);
  const classes = useStyles();
  const history = useHistory();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={darkMode === "light" ? classes.root : classes.rootDark}>
      <div className={classes.logoContainer}>
        <Typography
          className={darkMode === "light" ? classes.title : classes.titleDark}
        >
          Care
        </Typography>
        <img
          className={classes.logo}
          src="https://i.imgur.com/1QePclv.png"
          alt="logo"
        />
      </div>
      <form
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister(formData);
        }}
      >
        <div
          className={
            darkMode === "light"
              ? classes.inputContainer
              : classes.inputContainerDark
          }
        >
          <AccountCircleIcon />
          <TextField
            className={classes.inputField}
            type="text"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <br />
        <div
          className={
            darkMode === "light"
              ? classes.inputContainer
              : classes.inputContainerDark
          }
        >
          <EmailIcon />
          <FormControl>
            <InputLabel
              className={
                darkMode === "light" ? classes.label : classes.darkLabel
              }
              htmlFor="email"
            >
              Email Address
            </InputLabel>
            <Input
              id="email"
              type="text"
              style={{ color: "#fff" }}
              className={
                darkMode === "light"
                  ? classes.inputField
                  : classes.inputFieldDark
              }
              name="email"
              value={formData.email.toLowerCase()}
              onChange={handleChange}
            />
          </FormControl>
        </div>
        <br />
        <div
          className={
            darkMode === "light"
              ? classes.inputContainer
              : classes.inputContainerDark
          }
        >
          <LockIcon className={classes.lockIcon} />
          <FormControl>
            <InputLabel
              className={
                darkMode === "light"
                  ? classes.lasswordLabel
                  : classes.darkPasswordLabel
              }
              htmlFor="password"
            >
              Password
            </InputLabel>
            <Input
              className={
                darkMode === "light"
                  ? classes.passwordField
                  : classes.passwordFieldDark
              }
              name="password"
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? (
                      <Visibility
                        style={
                          darkMode === "dark"
                            ? { color: "#fff" }
                            : { color: "#000" }
                        }
                      />
                    ) : (
                      <VisibilityOff
                        style={
                          darkMode === "dark"
                            ? { color: "#fff" }
                            : { color: "#000" }
                        }
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <br />
        <Button
          type="submit"
          className={
            darkMode === "light"
              ? classes.registerButton
              : classes.registerButtonDark
          }
        >
          Register
        </Button>
      </form>
      <Typography
        className={darkMode === "light" ? classes.login : classes.loginDark}
      >
        Already have an account? &nbsp;
        <Link
          className={
            darkMode === "light" ? classes.loginLink : classes.loginLinkDark
          }
          to="/login"
        >
          Login
        </Link>
      </Typography>
    </div>
  );
}
