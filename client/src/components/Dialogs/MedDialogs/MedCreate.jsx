import React, { useState } from "react";
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
import FormHelperText from "@material-ui/core/FormHelperText";
import NativeSelect from "@material-ui/core/NativeSelect";

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

export default function MedCreate({ RXGuideMeds, open, onSave, handleClose }) {
  const [formData, setFormData] = useState({
    name: "",
    medication_class: "",
    reason: "",
    image: "",
    time: "",
  });

  const MEDS = React.Children.toArray(
    RXGuideMeds.map((med) => (
      <>
        <option value="" selected disabled hidden>
          Select a medication
        </option>
        <option>{med.fields.name}</option>
      </>
    ))
  );

  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log("date is :", value);
    if (name === "time" && value) {
      let date = new Date(value);
      value = date.toISOString();
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectedMed = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const medicine = RXGuideMeds.find(
      (med) => med.fields.name === formData.name
    );

    const selectedMedData = {
      ...formData,
      image: medicine?.fields.image,
      medication_class: medicine?.fields.class,
    };
    onSave(selectedMedData);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CreateIcon style={{ margin: "10px" }} />
            Log medication
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <div className="input-container">
            <FormHelperText>Please select a medication</FormHelperText>
            <NativeSelect
              className="select-css"
              name="name"
              required
              type="text"
              defaultValue="select"
              value={formData.name}
              onChange={handleSelectedMed}
              style={{ margin: "10px" }}
            >
              {MEDS}
            </NativeSelect>
          </div>

          <div className="input-container">
            <TextField
              className="select-css"
              name="reason"
              type="text"
              required
              label={
                !formData.name
                  ? `Why do you take your medicaiton?`
                  : `Why do you take ${formData.name}?`
              }
              style={{ display: "flex", width: "300px", margin: "10px" }}
              value={formData.reason}
              onChange={handleChange}
            />
          </div>

          <div className="input-container">
            <TextField
              name="time"
              required
              id="datetime-local"
              label={
                formData.name
                  ? `When do you take ${formData.name}?`
                  : `When do you take this medication?`
              }
              type="datetime-local"
              style={{ width: "300px", margin: "10px" }}
              value={formData.time}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <DialogActions>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </form>
    </Dialog>
  );
}
