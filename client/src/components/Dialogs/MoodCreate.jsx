import { useState } from "react";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import { red, green, yellow } from "@material-ui/core/colors";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
import "moment-timezone";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

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

const PoorRadio = withStyles({
  root: {
    color: red[500],
    "&$checked": {
      color: red[300],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const GoodRadio = withStyles({
  root: {
    color: green[700],
    "&$checked": {
      color: green[800],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const GreatRadio = withStyles({
  root: {
    color: green[500],
    "&$checked": {
      color: green[400],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const OkayRadio = withStyles({
  root: {
    color: yellow[600],
    "&$checked": {
      color: yellow[700],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function MoodCreate({ open, onSave, handleClose }) {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    status: "",
  });

  const handleChange = (e) => {
    const { name } = e.target;
    setFormData({
      status: name,
    });
  };
  let time = new Date();

  return (
    <div className={classes.root}>
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
            How are you feeling?
          </DialogTitle>
          <DialogContent dividers>
            <Typography>
              Today, <Moment format="MMMM-DD-yyyy hh:mm A">{time}</Moment>
            </Typography>
            <FormLabel>
              Poor
              <PoorRadio
                type="radio"
                name="Poor"
                checked={formData.status === "Poor"}
                onChange={handleChange}
              />
            </FormLabel>
            <FormLabel>
              Okay
              <OkayRadio
                type="radio"
                name="Okay"
                checked={formData.status === "Okay"}
                onChange={handleChange}
              />
            </FormLabel>
            <FormLabel>
              Good
              <GoodRadio
                type="radio"
                name="Good"
                checked={formData.status === "Good"}
                onChange={handleChange}
              />
            </FormLabel>
            <FormLabel>
              Great
              <GreatRadio
                type="radio"
                name="Great"
                checked={formData.status === "Great"}
                onChange={handleChange}
              />
            </FormLabel>
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
    </div>
  );
}
