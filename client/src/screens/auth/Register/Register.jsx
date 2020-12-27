import React, { useState, useContext } from "react";
import { useStateValue } from "../../../components/Context/CurrentUserContext";
import { DarkModeContext } from "../../../components/Context/DarkModeContext";
import { registerUser } from "../../../services/auth";
import { Link, useHistory } from "react-router-dom";
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
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";
import { toTitleCase } from "../../../utils/toTitleCase";
import TextField from "@material-ui/core/TextField";
import { getAge } from "../../../utils/getAge";
import { useStyles } from "./registerStyles";
import EventIcon from "@material-ui/icons/Event";
import CameraIcon from "@material-ui/icons/CameraAlt";
import FetchUsers from "../../../components/Helpers/FetchUsers";
import {
  checkEmailValidity,
  checkPasswordLength,
} from "../../../utils/authUtils";
import ClearIcon from "@material-ui/icons/Clear";

export default function Register() {
  const [{ currentUser }, dispatch] = useStateValue();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState(false);
  const [darkMode] = useContext(DarkModeContext);
  const [emailValidityAlert, setEmailValidityAlert] = useState(false);
  const [imagePreview, setImagePreview] = useState(false);
  const [passwordConfirmAlert, setPasswordConfirmAlert] = useState(false);
  const [emailUniquenessAlert, setEmailUniquenessAlert] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const history = useHistory();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegister = async (registerData) => {
    registerData.email = registerData?.email?.toLowerCase();
    const userData = await registerUser(registerData);
    dispatch({ type: "SET_USER", currentUser: userData });
    history.push("/");
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthday: "",
    gender: "",
    image: "",
  });
  const { name, email, password, birthday, gender, image } = formData;
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkPasswordLength(password, setPasswordAlert);
    checkEmailValidity(email, setEmailValidityAlert);
    if (allUsers.find((user) => user.email === email)) {
      setEmailUniquenessAlert(true);
    } else {
      setEmailUniquenessAlert(false);
    }
    if (password !== passwordConfirm) {
      return setPasswordConfirmAlert(true);
    } else {
      setPasswordConfirmAlert(false);
    }
    handleRegister(formData);
  };

  const onImageSelected = (e) => {
    const img = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      setFormData({
        name: name,
        email: email,
        password: password,
        birthday: birthday,
        gender: gender,
        image: fileReader.result,
      });
      setImagePreview(true);
    });
    if (img) {
      fileReader.readAsDataURL(img);
    }
  };

  const selectImage = () => {
    document.getElementById("image-upload").click();
  };

  const handleImageClear = () => {
    setFormData({
      ...formData,
      image: "",
    });
    document.getElementById("image-upload").value = "";

    setImagePreview(false);
  };

  const classes = useStyles({ darkMode, currentUser, imagePreview });

  return (
    <>
      <FetchUsers setAllUsers={setAllUsers} />
      <div className={classes.root}>
        <div className={classes.middleWrapper}>
          <div className={classes.logoContainer}>
            <Typography className={classes.title}>Care</Typography>
            <img
              className={classes.logo}
              src="https://i.imgur.com/1QePclv.png"
              alt="logo"
            />
          </div>
          {currentUser && (
            <>
              <Typography
                className={
                  darkMode === "light" ? classes.user : classes.userDark
                }
              >
                You already have an account, is this you?
                <br />
                Name: {currentUser?.name}
                <br />
                Email: {currentUser?.email}
                <br />
                Age: {getAge(currentUser?.birthday)}
                <br />
                Gender: {currentUser?.gender}
                <br />
              </Typography>
              <br />
            </>
          )}
          <div className={classes.imageContainer}>
            {imagePreview ? (
              <img
                className={classes.bigUserImage}
                src={image}
                alt={currentUser?.name}
              />
            ) : (
              <AccountCircleIcon className={classes.bigIcon} />
            )}
            <footer className={classes.pictureButtons}>
              {imagePreview && (
                <IconButton
                  onMouseDown={(e) => e.preventDefault()}
                  className={classes.clearIcon}
                  onClick={handleImageClear}
                >
                  <ClearIcon className={classes.clearIcon} />
                </IconButton>
              )}
              <IconButton
                onMouseDown={(e) => e.preventDefault()}
                className={classes.iconButton}
                onClick={selectImage}
              >
                <CameraIcon className={classes.cameraIcon} />
              </IconButton>
            </footer>
          </div>
          <br />
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.inputContainer}>
              {!imagePreview ? (
                <AccountCircleIcon />
              ) : (
                <img className={classes.userImage} src={image} alt={name} />
              )}
              <FormControl>
                <InputLabel
                  className={
                    darkMode === "light" ? classes.label : classes.darkLabel
                  }
                  htmlFor="name"
                >
                  Name
                </InputLabel>
                <Input
                  required
                  className={
                    darkMode === "light"
                      ? classes.inputField
                      : classes.inputFieldDark
                  }
                  type="text"
                  inputProps={{ maxLength: 20 }}
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </FormControl>
            </div>
            <div className={classes.inputContainer}>
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
                  required
                  id="email"
                  type="text"
                  className={
                    darkMode === "light"
                      ? classes.inputField
                      : classes.inputFieldDark
                  }
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </FormControl>
            </div>
            {emailValidityAlert && (
              <>
                <div className={classes.alert}>
                  <p>Please enter a valid email address</p>
                </div>
                <br />
              </>
            )}
            {emailUniquenessAlert && (
              <>
                <div className={classes.alert}>
                  <p>This email address already exists!</p>
                </div>
                <br />
              </>
            )}
            <div className={classes.inputContainer}>
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
                  required
                  className={
                    darkMode === "light"
                      ? classes.passwordField
                      : classes.passwordFieldDark
                  }
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment
                      className={classes.passwordIcon}
                      position="end"
                    >
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
            {passwordAlert && (
              <>
                <div className={classes.alert}>
                  <p>Password has to be 8 characters at minimum</p>
                </div>
                <br />
              </>
            )}
            <div className={classes.inputContainer}>
              <LockIcon className={classes.lockIcon} />
              <FormControl>
                <InputLabel
                  className={
                    darkMode === "light"
                      ? classes.passwordLabel
                      : classes.darkPasswordLabel
                  }
                  htmlFor="passwordConfirm"
                >
                  Confirm Password
                </InputLabel>
                <Input
                  required
                  className={
                    darkMode === "light"
                      ? classes.passwordField
                      : classes.passwordFieldDark
                  }
                  name="passwordConfirm"
                  id="passwordConfirm"
                  type={showPasswordConfirm ? "text" : "password"}
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  endAdornment={
                    <InputAdornment
                      className={classes.passwordIcon}
                      position="end"
                    >
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          setShowPasswordConfirm(!showPasswordConfirm)
                        }
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPasswordConfirm ? (
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
            {passwordConfirmAlert && (
              <>
                <div className={classes.alert}>
                  <p>Password and password confirmation do not match!</p>
                </div>
                <br />
              </>
            )}
            <div className={classes.inputContainer}>
              <EventIcon className={classes.lockIcon} />
              <TextField
                id="date"
                required
                label="Date of Birth"
                type="date"
                className={classes.birthdayField}
                name="birthday"
                InputLabelProps={{
                  shrink: true,
                }}
                value={birthday}
                onChange={handleChange}
              />
            </div>
            <input
              type="file"
              id="image-upload"
              style={{ visibility: "hidden" }}
              onChange={onImageSelected}
            />
            <div className={classes.genderContainer}>
              <FormHelperText style={{ marginLeft: "-20px" }}>
                What's your gender?
              </FormHelperText>
              <FormControl>
                <NativeSelect
                  native
                  required
                  label="gender"
                  value={toTitleCase(gender)}
                  onChange={handleChange}
                  inputProps={{
                    name: "gender",
                    id: "gender-native-simple",
                  }}
                >
                  <option value="" selected disabled hidden>
                    Select a gender
                  </option>
                  <option value={"Male"}>Male</option>
                  <option value={"Female"}>Female</option>
                  <option value={"Transgender"}>Transgender</option>
                  <option value={"Non-binray"}>Non-Binary </option>
                  <option value={"Other"}>Other</option>
                </NativeSelect>
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
          <br />
          <Typography
            className={darkMode === "light" ? classes.user : classes.userDark}
          >
            <a
              className={classes.link}
              target="_blank"
              rel="noreferrer"
              href="http://www.github.com/dannymichaels/care"
            >
              Daniel Michael &copy; 2020
            </a>
          </Typography>
        </div>
      </div>
    </>
  );
}
