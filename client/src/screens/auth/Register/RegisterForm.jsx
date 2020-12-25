import { useState, useContext } from "react";
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
import { useStyles } from "./registerStyles";
import EventIcon from "@material-ui/icons/Event";
import {
  checkEmailValidity,
  checkPasswordLength,
} from "../../../utils/authUtils";
import { registerUser } from "../../../services/auth";
import { useHistory } from "react-router-dom";
import { DarkModeContext } from "../../../components/Context/DarkModeContext";

function RegisterForm(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState(false);
  const [emailValidityAlert, setEmailValidityAlert] = useState(false);
  const [passwordConfirmAlert, setPasswordConfirmAlert] = useState(false);
  const [emailUniquenessAlert, setEmailUniquenessAlert] = useState(false);
  const [darkMode] = useContext(DarkModeContext);
  const history = useHistory();

  const handleRegister = async (registerData) => {
    registerData.email = registerData?.email?.toLowerCase();
    const userData = await registerUser(registerData);
    props.dispatch({ type: "SET_USER", currentUser: userData });
    history.push("/");
  };

  const [passwordConfirm, setPasswordConfirm] = useState();

  const { name, email, password, birthday, gender, image } = props.formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    checkPasswordLength(password, setPasswordAlert);
    checkEmailValidity(email, setEmailValidityAlert);
    if (props.allUsers.find((user) => user.email === email)) {
      setEmailUniquenessAlert(true);
    } else {
      setEmailUniquenessAlert(false);
    }
    if (password !== passwordConfirm) {
      return setPasswordConfirmAlert(true);
    } else {
      setPasswordConfirmAlert(false);
    }
    handleRegister(props.formData);
  };

  const onImageSelected = (e) => {
    const img = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      props.setFormData({
        name: props.formData.name,
        email: props.formData.email,
        password: props.formData.password,
        birthday: props.formData.birthday,
        gender: props.formData.gender,
        image: fileReader.result,
      });
      props.setImagePreview(true);
    });
    if (img) {
      fileReader.readAsDataURL(img);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const classes = useStyles({ darkMode });

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div
        className={
          darkMode === "light"
            ? classes.inputContainer
            : classes.inputContainerDark
        }
      >
        {!props.imagePreview ? (
          <AccountCircleIcon />
        ) : (
          <img className={classes.userImage} src={image} alt={name} />
        )}
        <FormControl>
          <InputLabel
            className={darkMode === "light" ? classes.label : classes.darkLabel}
            htmlFor="name"
          >
            Name
          </InputLabel>
          <Input
            required
            className={
              darkMode === "light" ? classes.inputField : classes.inputFieldDark
            }
            type="text"
            inputProps={{ maxLength: 20 }}
            name="name"
            value={props.name}
            onChange={handleChange}
          />
        </FormControl>
      </div>
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
            className={darkMode === "light" ? classes.label : classes.darkLabel}
            htmlFor="email"
          >
            Email Address
          </InputLabel>
          <Input
            required
            id="email"
            type="text"
            className={
              darkMode === "light" ? classes.inputField : classes.inputFieldDark
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
              <InputAdornment className={classes.passwordIcon} position="end">
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
              <InputAdornment className={classes.passwordIcon} position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
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
      <div
        className={
          darkMode === "light"
            ? classes.inputContainer
            : classes.inputContainerDark
        }
      >
        <EventIcon className={classes.lockIcon} />
        <TextField
          id="date"
          required
          label="Date of Birth"
          type="date"
          className={
            darkMode === "light"
              ? classes.birthdayField
              : classes.birthdayFieldDark
          }
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
  );
}

export default RegisterForm;
