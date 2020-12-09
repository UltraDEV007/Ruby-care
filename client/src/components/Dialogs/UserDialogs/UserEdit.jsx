import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
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

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

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
  });
  const { name, birthday, gender, email, password } = formData;
  const [showPassword, setShowPassword] = useState(false);

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

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={handleOpen}
    >
      <DialogTitle>
        <Typography className="title">Edit user</Typography>
      </DialogTitle>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(currentUser.id, formData);
        }}
      >
        <DialogContent dividers>
          <div className="input-container">
            <div>
              <AccountCircleIcon />
              <FormControl>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input
                  type="text"
                  inputProps={{ maxLength: 20 }}
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </FormControl>
            </div>
            <br />
            <div>
              <EmailIcon />
              <FormControl>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </FormControl>
            </div>
            <br />
            <div>
              <LockIcon />
              <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
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

            <div>
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
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
