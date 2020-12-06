import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
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

export default function MedEdit({
  RXGuideMeds,
  onSave,
  handleOpen,
  handleClose,
  meds,
}) {
  const [formData, setFormData] = useState({
    name: "",
    medication_class: "",
    description: "",
    image: "",
    time: "",
  });
  const { name, time } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const oneMed = meds?.find((med) => {
        return med?.id === Number(id);
      });
      const { name, medication_class, image, description, time } = oneMed;
      setFormData({ name, medication_class, image, time, description });
    };
    if (meds?.length) {
      prefillFormData();
    }
  }, [meds, id]);

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

  const IMAGES = React.Children.toArray(
    RXGuideMeds.map((med) => (
      <>
        <option value="" selected disabled hidden>
          Select an image
        </option>
        <option style={{ backgroundImage: `url(${med.fields.image})` }}>
          {med.fields.image}
        </option>
      </>
    ))
  );

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
      open={handleOpen}
    >
      <DialogTitle>
        <Typography className="title">Edit Symptom</Typography>
      </DialogTitle>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(id, formData);
        }}
      >
        <DialogContent dividers>
          <div className="input-container">
            <FormHelperText>Please select a medication</FormHelperText>
            <select
              className="select-css"
              name="name"
              type="text"
              style={{ marginLeft: "10px" }}
              defaultValue="select"
              value={name}
              onChange={handleChange}
            >
              {MEDS}
            </select>
          </div>
          <div className="input-container">
            {!name ? (
              <FormHelperText>What class is your medication?</FormHelperText>
            ) : (
              <FormHelperText>What class is {name}?</FormHelperText>
            )}
            <select
              className="select-css"
              name="medication_class"
              type="text"
              required
              style={{ marginLeft: "10px" }}
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

          <div className="input-container" style={{ marginLeft: "10px" }}>
            {!formData.name ? (
              <FormHelperText>
                What does your medication look like?
              </FormHelperText>
            ) : (
              <FormHelperText>
                What does {formData.name} look like?
              </FormHelperText>
            )}
            <select
              className="select-css"
              type="text"
              name="image"
              style={{
                display: "flex",
                width: "300px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              value={formData.image}
              onChange={handleChange}
            >
              {IMAGES}
            </select>
          </div>

          <div className="input-container">
            <TextField
              name="time"
              required
              id="datetime-local"
              label={
                name
                  ? `When did you take ${formData.name}?`
                  : `When did you take this medication?`
              }
              type="datetime-local"
              style={{ width: "300px", margin: "10px" }}
              value={time}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <DialogActions>
            <Button to="/" type="submit" variant="contained" color="primary">
              Save
            </Button>
            <Button
              to="/"
              component={Link}
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </form>
    </Dialog>
  );
}
