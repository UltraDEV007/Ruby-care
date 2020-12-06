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
    description: "",
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

  // const IMAGES = React.Children.toArray(
  //   RXGuideMeds.map((med) => (
  //     <>
  //       <option value="" selected disabled hidden>
  //         Select a image
  //       </option>
  //       <option style={{ backgroundImage: `url(${med.fields.image})` }}>
  //         <img src={med.fields.image} alt={med.fields.name} />
  //       </option>
  //     </>
  //   ))
  // );

  const CLASSES = React.Children.toArray(
    RXGuideMeds.map((med) => (
      <>
        <option value="" selected disabled hidden>
          Select a class
        </option>
        <option>{med.fields.class}</option>
      </>
    ))
  );

  // const DESCRIPTIONS = React.Children.toArray(
  //   RXGuideMeds.map((med) => (
  //     <>
  //       <option value="" selected disabled hidden>
  //         Select a description
  //       </option>
  //       <option>{med.fields.description}</option>
  //     </>
  //   ))
  // );
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
            <CreateIcon style={{ margin: "10px" }} />
            Log medication
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <div className="input-container">
            <FormHelperText>Please select a medication</FormHelperText>
            <select
              className="select-css"
              name="name"
              type="text"
              defaultValue="select"
              value={formData.name}
              onChange={handleChange}
              style={{ margin: "10px" }}
            >
              {MEDS}
            </select>
          </div>

          <div className="input-container" style={{ marginLeft: "10px" }}>
            {!formData.name ? (
              <FormHelperText>What class is your medication?</FormHelperText>
            ) : (
              <FormHelperText>What class is {formData.name}?</FormHelperText>
            )}
            <select
              className="select-css"
              name="medication_class"
              type="text"
              required
              defaultValue="select"
              value={formData.medication_class}
              onChange={handleChange}
            >
              {CLASSES}
              <option value=" ">I don't know</option>
            </select>
          </div>
          <div className="input-container">
            <TextField
              className="select-css"
              name="description"
              type="text"
              required
              label={
                !formData.name ? (
                  <FormHelperText>
                    Why did you take your medicaiton?
                  </FormHelperText>
                ) : (
                  <FormHelperText>
                    Why did you take {formData.name}?
                  </FormHelperText>
                )
              }
              style={{ display: "flex", width: "300px", margin: "10px" }}
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* <div className="input-container">
            <select
              className="select-css"
              type="text"
              style={{ marginLeft: "10px" }}
            >
              {IMAGES}
            </select>
          </div> */}

          <div className="input-container">
            <TextField
              name="time"
              required
              id="datetime-local"
              label={
                formData.name
                  ? `When did you take ${formData.name}?`
                  : `When did you take this medication?`
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
