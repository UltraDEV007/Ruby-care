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

export default function SymptomEdit({
  onSave,
  handleOpen,
  handleClose,
  symptoms,
}) {
  const [formData, setFormData] = useState({
    name: "",
    time: "",
  });
  const { name, time } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const oneSymptom = symptoms?.find((symptom) => {
        return symptom?.id === Number(id);
      });
      const { name, time } = oneSymptom;
      setFormData({ name, time });
    };
    if (symptoms?.length) {
      prefillFormData();
    }
  }, [symptoms, id]);

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
            <TextField
              required
              label="symptom"
              autoFocus
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="input-container">
            <TextField
              required
              type="datetime-local"
              name="time"
              value={time}
              onChange={handleChange}
            />
          </div>
          <br />

          <DialogActions>
            <Button type="submit" variant="contained" color="primary">
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
