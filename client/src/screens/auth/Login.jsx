import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../CurrentUser/CurrentUserContext";
import { loginUser } from "../../services/auth";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "20px",
  },

  title: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: "36px",
    padding: "15px",
    marginTop: "10px",
    textShadow: "0.5px 4px 10px #999",
  },
  logo: {
    width: "100px",
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
  register: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: "28px",
    textDecoration: "none",
    color: "#000",
  },
  registerLink: {
    textDecoration: "none",
    color: "#62B5D9",
  },
  field: {
    fontSize: "30px",
    margin: "20px",
  },
});

export default function Login() {
  const history = useHistory();
  const classes = useStyles();

  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/home");
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
      <div className={classes.root}>
        <div className={classes.logoContainer}>
          <Typography className={classes.title}>Care</Typography>
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
            handleLogin(formData);
          }}
        >
          <TextField
            className={classes.field}
            type="text"
            name="email"
            label="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <br />

          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              name="password"
              id="standard-adornment-password"
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
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
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
      </div>
    </>
  );
}
