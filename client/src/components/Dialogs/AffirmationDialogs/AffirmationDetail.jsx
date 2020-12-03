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
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <img
              src="https://www.pngrepo.com/download/180681/love-letter-hearts.png"
              style={{ marginRight: "15px", width: "40px" }}
              alt="opened affirmation letter"
            />
            Dear&nbsp;{affirmation?.user?.name}...
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <img
              src="https://www.pngrepo.com/download/180681/love-letter-hearts.png"
              style={{ marginRight: "15px", width: "40px" }}
              alt="opened affirmation letter"
            />
            Dear me...
          </div>
        )}
      </DialogTitle>
      <DialogContent
        dividers
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          overflowWrap: "break-word",
        }}
      >
        <Typography>{affirmation.content}</Typography>
      </DialogContent>
      <DialogTitle>
        <Typography>
          <Moment format="dddd, MMMM yyyy hh:mm A">
            {affirmation?.created_at}
          </Moment>
        </Typography>
      </DialogTitle>
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
