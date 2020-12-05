import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import { red, green, yellow } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

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

export default function MoodEdit(props) {
  const [formData, setFormData] = useState({
    status: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const moodItem = props.moods?.find((mood) => mood?.id === Number(id));
      setFormData({
        status: moodItem?.status,
      });
    };
    if (props.moods?.length) {
      prefillForm();
    }
  }, [props.moods, id]);

  const handleSubmit = (e) => {
    if (e.target === formData.status) {
      e.preventDefault();
      return alert(
        `But you already felt ${formData.status} at ${(
          <> {formData.created_at}</>
        )} `
      );
    } else {
      e.preventDefault();
      props.onSave(id, formData);
    }
  };
  const handleChange = (e) => {
    const { name } = e.target;
    setFormData({
      status: name,
    });
  };

  return (
    <Dialog
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.handleOpen}
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle>
          <Typography>Edit Mood</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <div>
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
          </div>
        </DialogContent>

        <DialogActions>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
          <Button
            to="/"
            component={Link}
            variant="contained"
            color="secondary"
            onClick={props.handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
