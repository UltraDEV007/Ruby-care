import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../../components/Context/CurrentUserContext";
import { DarkModeContext } from "../../../components/Context/DarkModeContext";
import { loginUser } from "../../../services/auth";
import Typography from "@material-ui/core/Typography";
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
import { getAge } from "../../../utils/getAge";
import { useStyles } from "./loginStyles.js";

export default function Login() {
  const [{ currentUser }, dispatch] = useStateValue();
  const [darkMode] = useContext(DarkModeContext);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const classes = useStyles({ darkMode, currentUser });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async (loginData) => {
    loginData.email = loginData.email.toLowerCase();
    const userData = await loginUser(loginData);
    dispatch({ type: "SET_USER", currentUser: userData });
    history.push("/");
  };

  const [formData, setFormData] = useState({
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
    <>
      <div className={darkMode === "dark" ? classes.rootDark : classes.root}>
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
        {currentUser && (
          <Typography
            className={darkMode === "light" ? classes.user : classes.userDark}
          >
            You're already logged in, is this you?
            <br />
            {currentUser?.image && (
              <img
                className={classes.userLoggedImage}
                src={currentUser?.image}
                alt={currentUser?.name}
              />
            )}
            Name: {currentUser?.name}
            <br />
            Email: {currentUser?.email}
            <br />
            Age: {getAge(currentUser?.birthday)}
            <br />
            Gender: {currentUser?.gender}
          </Typography>
        )}
        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(formData);
          }}
        >
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
                className={
                  darkMode === "light"
                    ? classes.inputField
                    : classes.inputFieldDark
                }
                name="email"
                value={formData.email}
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
                    ? classes.passwordLabel
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
                ? classes.loginButton
                : classes.loginButtonDark
            }
          >
            Login
          </Button>
        </form>
        <Typography
          className={
            darkMode === "light" ? classes.register : classes.registerDark
          }
        >
          Don't have an account? &nbsp;
          <Link
            className={
              darkMode === "light"
                ? classes.registerLink
                : classes.registerLinkDark
            }
            to="/register"
          >
            Register
          </Link>
        </Typography>
        <br />
        <Typography
          className={darkMode === "light" ? classes.user : classes.userDark}
        >
          <br />
          Daniel Michael &copy; 2020
        </Typography>
      </div>
    </>
  );
}
