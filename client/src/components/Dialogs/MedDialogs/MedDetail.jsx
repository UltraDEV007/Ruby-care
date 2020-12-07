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
import { compareDateWithCurrentTime } from "../../../utils/compareDateWithCurrentTime";

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

export default function MedDetail({
  med,
  openDetail,
  handleDetailClose,
  onDelete,
}) {
  let currentTime = new Date();

  return (
    <Dialog
      onClose={handleDetailClose}
      aria-labelledby="customized-dialog-title"
      open={openDetail}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleDetailClose}>
        <Typography
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "1.3rem",
            fontFamily: "Montserrat, sans-serif",
            padding: "5px",
          }}
        >
          <img
            src={med.image}
            style={{ height: "30px", width: "50px" }}
            alt={med.name}
          />
          &nbsp;
          <>{med.name}</>
        </Typography>
        <Typography style={{ textAlign: "left", marginLeft: "10px" }}>
          {med.medication_class}
        </Typography>
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
        <Typography>I took {med.name} because...</Typography>
        <Typography style={{ marginTop: "2px" }}>
          <small>{med.reason}</small>
        </Typography>
      </DialogContent>
      <DialogTitle>
        {compareDateWithCurrentTime(med?.time) < 0 ? (
          <Typography>
            You have to take {med?.name}&nbsp;
            <Moment from={currentTime?.toISOString()}>{med?.time}</Moment>
          </Typography>
        ) : (
          <Typography>Did you take {med?.name}?</Typography>
        )}
      </DialogTitle>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleDetailClose}>
          {compareDateWithCurrentTime(med?.time) === -1 ? (
            <>Not yet</>
          ) : (
            <>Exit</>
          )}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="delete-button"
          onClick={() => onDelete(med.id)}
        >
          {compareDateWithCurrentTime(med?.time) ? <>Yes</> : <>Delete</>}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
