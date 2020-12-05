import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";

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

export default function AffirmationEdit({
  handleOpen,
  handleClose,
  onSave,
  affirmations,
}) {
  const [formData, setFormData] = useState({
    content: "",
  });
  const { content } = formData;
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    const prefillFormData = () => {
      const oneAffirmation = affirmations?.find((affirmation) => {
        return affirmation?.id === Number(id);
      });
      if (oneAffirmation?.content === undefined) {
        history.push("/");
      } else {
        const { content } = oneAffirmation;
        setFormData({ content });
      }
    };
    if (affirmations?.length) {
      prefillFormData();
    }
  }, [affirmations, id, history]);

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
        <Typography className="title">Edit Affirmation</Typography>
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
              label="content"
              variant="filled"
              className="string-input title"
              autoFocus
              multiline
              rows={4}
              type="text"
              name="content"
              value={content}
              onChange={handleChange}
            />
          </div>

          <DialogActions>
            <Button type="submit" variant="contained" color="primary">
              Submit
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
