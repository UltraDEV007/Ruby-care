import React, { useState, useEffect } from "react";
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
import {
  DialogTitle,
  DialogContent,
  DialogActions,
} from "../../Form/DialogComponents";
import styled from "styled-components";

const Form = styled.form`
  .input-container {
    display: flex;
    justify-self: center;
    align-items: center;
    justify-content: flex-start;
  }
  .input-field {
    width: 300px;
  }
  .icon {
    margin-top: 10px;
    margin-right: 10px;
  }
`;
export default function UserEdit({
  handleOpen,
  handleClose,
  onSave,
  currentUser,
}) {
  const [formData, setFormData] = useState({
    name: "",
    birthday: "",
    email: "",
    gender: "",
    passwordConfirm: "",
  });
  const { name, birthday, gender, email, password, passwordConfirm } = formData;
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
    if (password !== passwordConfirm) {
      return alert("Password and password confirmation do not match");
    }
    onSave(currentUser.id, formData);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={handleOpen}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Typography className="title">Edit Account</Typography>
      </DialogTitle>

      <Form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <div className="input-container">
            <AccountCircleIcon className="icon" />
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
          <div className="input-container">
            <LockIcon className="icon" />
            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                className="input-field"
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
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
          </div>
          <br />
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
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setShowPasswordConfirm(!showPasswordConfirm)
                      }
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPasswordConfirm ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
          </div>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
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

          <DialogActions>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
            <Button
              to="/settings"
              component={Link}
              onClick={handleClose}
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </Form>
    </Dialog>
  );
}
