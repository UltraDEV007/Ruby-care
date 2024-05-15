import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

// Context
import { useStateValue } from "../../../context/CurrentUserContext";
import { ThemeStateContext } from "../../../context/ThemeStateContext";

// Services and Utilities
import { loginUser } from "../../../services/auth";
import { getAge } from "../../../utils/getAge";

// Components
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import LinearProgressLoading from "../../../components/Loading/LinearProgressLoading.jsx";

// Icons
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";

// Styles
import { useStyles } from "./loginStyles.js";

export default function Login() {
  const [{ currentUser }, dispatch] = useStateValue();
  const [themeState] = useContext(ThemeStateContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const classes = useStyles({ themeState, currentUser });
  const token = localStorage.getItem("authToken");

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async (loginData) => {
    try {
      setIsLoading(true);
      loginData.email = loginData?.email?.toLowerCase();
      const userData = await loginUser(loginData);

      dispatch({
        type: "SET_USER",
        currentUser: userData,
      });

      setIsLoading(false);
      history.push("/");
    } catch (error) {
      setIsLoading(false);
      setError(error.response);
    }
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

  if (isLoading) {
    return <LinearProgressLoading themeState={themeState} />;
  }

  return (
    <>
      <div className={classes.root}>
        <div className={classes.logoContainer}>
          <Typography className={classes.title}>Care</Typography>
          <img
            className={classes.logo}
            src="https://i.imgur.com/1QePclv.png"
            alt="logo"
          />
        </div>
        {currentUser && token && (
          <Typography className={classes.user}>
            You're already logged in, is this you?
            {currentUser?.image && (
              <img
                className={classes.userLoggedImage}
                src={currentUser?.image}
                alt={currentUser?.name}
              />
            )}
            <br />
            Name: {currentUser?.name}
            <br />
            Email: {currentUser?.email}
            <br />
            Age: {getAge(currentUser?.birthday)}
            <br />
            Gender: {currentUser?.gender}
          </Typography>
        )}

        {error && (
          <Typography className={classes.user} style={{ color: "red" }}>
            {error.data?.message ?? error?.statusText}
          </Typography>
        )}
        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(formData);
          }}
        >
          <div className={classes.inputContainer}>
            <EmailIcon />
            <FormControl>
              <InputLabel className={classes.label} htmlFor="email">
                Email Address
              </InputLabel>
              <Input
                id="email"
                type="text"
                className={classes.inputField}
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
          </div>
          <br />
          <div className={classes.inputContainer}>
            <LockIcon className={classes.lockIcon} />
            <FormControl>
              <InputLabel className={classes.passwordLabel} htmlFor="password">
                Password
              </InputLabel>
              <Input
                className={classes.passwordField}
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
                        <Visibility className={classes.visibility} />
                      ) : (
                        <VisibilityOff className={classes.visibility} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <br />
          <Button type="submit" className={classes.loginButton}>
            Login
          </Button>
        </form>
        <Typography className={classes.register}>
          Don't have an account? &nbsp;
          <Link className={classes.registerLink} to="/register">
            Register
          </Link>
        </Typography>
        <br />
        <Typography className={classes.user}>
          <br />
          <a
            className={classes.link}
            target="_blank"
            rel="noreferrer"
            href="http://www.github.com/dannymichaels/care"
          >
            Daniel Michael &copy; {new Date().getFullYear()}
          </a>
        </Typography>
      </div>
    </>
  );
}
