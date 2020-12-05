import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import CreateIcon from "@material-ui/icons/Create";
import Select from "@material-ui/core/Select";
import "./FoodCreate.css";
import FormHelperText from "@material-ui/core/FormHelperText";
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

// code for dialog referenced from Material-ui's docs
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

export default function FoodCreate({ open, onSave, handleClose }) {
  const [formData, setFormData] = useState({
    name: "",
    time: "",
    rating: 1,
    factors: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(formData);
        }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CreateIcon style={{ marginRight: "10px" }} />
            Log food
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <div className="input-container">
            <TextField
              required
              autoFocus
              type="text"
              name="name"
              label="Food/meal name"
              style={{ width: "300px", margin: "10px" }}
              value={toTitleCase(formData.name)}
              onChange={handleChange}
              id="outlined-multiline-static"
              variant="filled"
            />
          </div>

          <div className="input-container">
            <TextField
              name="time"
              required
              id="datetime-local"
              label="When did you eat this?"
              type="datetime-local"
              style={{ width: "300px", margin: "10px" }}
              value={formData.time}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <div className="rating-input-container">
            <FormHelperText>
              On a scale of 1/5 did much did you enjoy it?
            </FormHelperText>
            <Select
              native
              required
              label="rating"
              value={formData.rating}
              onChange={handleChange}
              inputProps={{
                name: "rating",
                id: "rating-native-simple",
              }}
            >
              <option value={1}>⭐ </option>
              <option value={2}>⭐ ⭐ </option>
              <option value={3}>⭐ ⭐ ⭐ </option>
              <option value={4}>⭐ ⭐ ⭐ ⭐ </option>
              <option value={5}>⭐ ⭐ ⭐ ⭐ ⭐ </option>
            </Select>
          </div>

          <div className="input-container">
            <TextField
              name="factors"
              required
              id="factor-input"
              label="What were the leading factors?"
              type="text"
              style={{ width: "300px", margin: "10px" }}
              value={formData.factors}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
