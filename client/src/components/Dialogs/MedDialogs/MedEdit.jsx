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
    reason: "",
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
      const { name, medication_class, image, reason, time } = oneMed;
      setFormData({ name, medication_class, image, time, reason });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
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
    onSave(id, selectedMedData);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={handleOpen}
    >
      <DialogTitle>
        <Typography className="title">Edit Medication</Typography>
      </DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <div className="input-container">
            <FormHelperText>Please select a medication</FormHelperText>
            <NativeSelect
              className="select-css"
              name="name"
              required
              type="text"
              style={{ marginLeft: "10px" }}
              defaultValue="select"
              value={name}
              onChange={handleSelectedMed}
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
                name
                  ? `When do you take ${formData.name}?`
                  : `When do you take this medication?`
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
