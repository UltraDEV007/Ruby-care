import React, { useContext, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";
import { getOneUser } from "../../../services/users";
import { toTitleCase } from "../../../utils/toTitleCase";
import CameraIcon from "@material-ui/icons/CameraAlt";
import ClearIcon from "@material-ui/icons/Clear";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
} from "../../Form/DialogComponents";
import Form from "./StyledUserEdit";
import { DarkModeContext } from "../../Context/DarkModeContext";
import {
  checkEmailUniqueuess,
  checkEmailValidity,
  checkPasswordLength,
} from "../../../utils/authUtils";

export default function UserEdit({
  handleOpen,
  handleClose,
  onSave,
  currentUser,
  allUsers,
}) {
  const [formData, setFormData] = useState({
    name: "",
    birthday: "",
    email: "",
    gender: "",
    password: "",
    image: "",
  });
  const { name, birthday, gender, email, password, image } = formData;
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmAlert, setPasswordConfirmAlert] = useState(false);
  const [emailUniquenessAlert, setEmailUniquenessAlert] = useState(false);
  const [emailValidityAlert, setEmailValidityAlert] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState(false);
  const [allConditionsAreNotMet, setAllConditionsAreNotMet] = useState(true);

  const [darkMode] = useContext(DarkModeContext);

  const handleImageClear = () => {
    setFormData({
      ...formData,
      image: "",
    });
    document.getElementById("image-upload").value = "";
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
    });
    if (img) {
      fileReader.readAsDataURL(img);
    }
  };

  const selectImage = () => {
    document.getElementById("image-upload").click();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleValidity = () => {
    password && checkPasswordLength(password, setPasswordAlert);
    checkEmailValidity(email, setEmailValidityAlert);
    checkEmailUniqueuess(allUsers, email, setEmailUniquenessAlert, currentUser);
    if (password !== passwordConfirm) {
      setPasswordConfirmAlert(true);
    } else {
      setPasswordConfirmAlert(false);
    }
    if (
      !passwordAlert &&
      !emailValidityAlert &&
      !emailUniquenessAlert &&
      password === passwordConfirm &&
      password &&
      name
    ) {
      setAllConditionsAreNotMet(false);
    } else {
      setAllConditionsAreNotMet(true);
    }
  };

  useEffect(() => {
    handleValidity();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    allUsers,
    currentUser,
    email,
    password,
    passwordConfirm,
    emailValidityAlert,
    emailUniquenessAlert,
    passwordAlert,
    name,
  ]);

  useEffect(() => {
    const fetchUser = async () => {
      if (currentUser?.id) {
        const oneUser = await getOneUser(currentUser.id);
        setFormData(oneUser);
        return () => {
          setFormData(oneUser);
        };
      }
    };
    fetchUser();
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidity();
    checkPasswordLength(password, setPasswordAlert);
    onSave(currentUser.id, formData);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={handleOpen}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Typography className="title">Edit Account</Typography>
      </DialogTitle>

      <Form darkMode={darkMode} image={image} onSubmit={handleSubmit}>
        <DialogContent dividers>
          <div className="user-image-container">
            {image ? (
              <img
                className="big-user-image"
                src={image}
                alt={currentUser?.name}
              />
            ) : (
              <AccountCircleIcon className="big-icon" />
            )}
            <footer className="picture-buttons">
              <IconButton
                onMouseDown={(e) => e.preventDefault()}
                className="icon-button clear"
                onClick={handleImageClear}>
                <ClearIcon className="big-camera-icon" />
              </IconButton>
              <IconButton
                onMouseDown={(e) => e.preventDefault()}
                className="icon-button"
                onClick={selectImage}>
                <CameraIcon className="big-camera-icon" />
              </IconButton>
            </footer>
          </div>

          <div className="input-container">
            {!image ? (
              <AccountCircleIcon className="icon" />
            ) : (
              <img className="user-image" src={image} alt="invalid url" />
            )}
            <FormControl className="name">
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                className="input-field"
                type="text"
                inputProps={{ maxLength: 20 }}
                name="name"
                value={name}
                onChange={handleChange}
              />
            </FormControl>
          </div>
          <br />
          <div className="input-container">
            <EmailIcon className="icon" />
            <FormControl>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                className="input-field"
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </FormControl>
          </div>
          <br />
          {emailValidityAlert && (
            <>
              <div className="alert">
                <p>Please enter a valid email address</p>
              </div>
              <br />
            </>
          )}
          {emailUniquenessAlert && (
            <>
              <div className="alert">
                <p>This email address already exists!</p>
              </div>
              <br />
            </>
          )}
          <div className="input-container">
            <LockIcon className="icon" />
            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                className="input-field"
                name="password"
                id="password"
                required
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}>
                      {showPassword ? (
                        <Visibility className="visibility" />
                      ) : (
                        <VisibilityOff className="visibility" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
          </div>
          <br />
          {passwordAlert && (
            <>
              <div className="alert">
                <p>Password has to be 8 characters at minimum</p>
              </div>
              <br />
            </>
          )}
          <div className="input-container">
            <LockIcon className="icon" />
            <FormControl className="password-confirm">
              <InputLabel htmlFor="passwordConfirm">
                Confirm Password
              </InputLabel>
              <Input
                required
                className="input-field"
                name="passwordConfirm"
                id="password-confirm"
                type={showPasswordConfirm ? "text" : "password"}
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setShowPasswordConfirm(!showPasswordConfirm)
                      }
                      onMouseDown={handleMouseDownPassword}>
                      {showPasswordConfirm ? (
                        <Visibility className="visibility" />
                      ) : (
                        <VisibilityOff className="visibility" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <br />
          {passwordConfirmAlert && (
            <>
              <div className="alert">
                <p>Password and password confirmation do not match!</p>
              </div>
              <br />
            </>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <TextField
              id="date"
              required
              label="Date of Birth"
              type="date"
              name="birthday"
              InputLabelProps={{
                shrink: true,
              }}
              value={birthday}
              onChange={handleChange}
            />
            <input
              type="file"
              id="image-upload"
              style={{ visibility: "hidden" }}
              onChange={onImageSelected}
            />
          </div>
          <div className="gender-container">
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
                }}>
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
          <DialogActions>
            <Button
              disabled={allConditionsAreNotMet}
              type="submit"
              variant="contained"
              color="primary">
              Save
            </Button>
            <Button
              to="/settings"
              component={Link}
              onClick={handleClose}
              variant="contained"
              color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </Form>
    </Dialog>
  );
}
