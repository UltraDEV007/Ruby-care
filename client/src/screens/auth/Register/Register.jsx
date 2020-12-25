import React, { useState, useContext } from "react";
import { useStateValue } from "../../../components/Context/CurrentUserContext";
import { DarkModeContext } from "../../../components/Context/DarkModeContext";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { getAge } from "../../../utils/getAge";
import { useStyles } from "./registerStyles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CameraIcon from "@material-ui/icons/CameraAlt";
import FetchUsers from "../../../components/Helpers/FetchUsers";
import RegisterForm from "./RegisterForm";

export default function Register() {
  const [{ currentUser }, dispatch] = useStateValue();
  const [darkMode] = useContext(DarkModeContext);
  const [imagePreview, setImagePreview] = useState(false);

  const [allUsers, setAllUsers] = useState([]);

  const classes = useStyles({ darkMode, currentUser });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthday: "",
    gender: "",
    image: "",
  });

  const selectImage = () => {
    document.getElementById("image-upload").click();
  };

  return (
    <>
      <FetchUsers setAllUsers={setAllUsers} />
      <div className={darkMode === "light" ? classes.root : classes.rootDark}>
        <div className={classes.middleWrapper}>
          <div className={classes.logoContainer}>
            <Typography
              className={
                darkMode === "light" ? classes.title : classes.titleDark
              }
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

          <div>
            {imagePreview ? (
              <img
                className={classes.bigUserImage}
                src={formData.image}
                alt={currentUser?.name}
              />
            ) : (
              <AccountCircleIcon className={classes.bigIcon} />
            )}
            <IconButton
              onMouseDown={(e) => e.preventDefault()}
              className={classes.iconButton}
              onClick={selectImage}
            >
              <CameraIcon className={classes.cameraIcon} />
            </IconButton>
          </div>
          <br />

          <RegisterForm
            formData={formData}
            setFormData={setFormData}
            allUsers={allUsers}
            dispatch={dispatch}
            setImagePreview={setImagePreview}
          />

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
            Daniel Michael &copy; 2020
          </Typography>
        </div>
      </div>
    </>
  );
}
