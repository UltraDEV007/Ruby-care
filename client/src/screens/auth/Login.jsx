import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../CurrentUser/CurrentUserContext";
import { loginUser } from "../../services/auth";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

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
    padding: '20px',
  },

  title: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: "36px",
    padding: '15px',
    marginTop: '10px',
    textShadow: '2px 2px 2px 2px #999'
  },
  logo: {
    width: "100px",
  },
  form: {},
});

export default function Login() {
  const history = useHistory();
  const classes = useStyles();

  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);

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
          <h3>Login</h3>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <Link to="/register">Register</Link>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
