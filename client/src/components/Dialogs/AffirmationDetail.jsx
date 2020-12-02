import { withStyles } from "@material-ui/core/styles";
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
import CreateIcon from "@material-ui/icons/Create";

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

export default function AffirmationDetail({
  affirmation,
  openDetail,
  handleDetailOpen,
  handleDetailClose,
  onDelete,
}) {
  return (
    <Dialog
      onClose={handleDetailClose}
      aria-labelledby="customized-dialog-title"
      open={openDetail}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleDetailClose}>
        {affirmation?.user?.name ? (
          <> To: {affirmation?.user?.name}</>
        ) : (
          <>
            <CreateIcon /> Dear me,{" "}
          </>
        )}
      </DialogTitle>
      <DialogContent dividers style={{ minWidth: "300px" }}>
        <Moment format="MMMM-DD-yyyy hh:mm A">
          <Typography>At, {affirmation?.created_at}</Typography>
        </Moment>
        <p>{affirmation.content}</p>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleDetailClose}>
          Exit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="delete-button"
          onClick={() => onDelete(affirmation.id)}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
