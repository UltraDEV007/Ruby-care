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
import ratingLogic from "../../../utils/ratingLogic";
import { foodNameJSX } from "../../../utils/foodUtils";

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

export default function FoodDetail({
  food,
  openDetail,
  onDelete,
  setOpenDetail,
}) {
  return (
    <Dialog
      onClose={() => setOpenDetail(false)}
      aria-labelledby="customized-dialog-title"
      open={openDetail}
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={() => setOpenDetail(false)}
      >
        {foodNameJSX(food)}
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
        <Typography> Rating:&nbsp;{ratingLogic(food.rating, "⭐")}</Typography>
      </DialogContent>
      <DialogContent
        dividers
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          overflowWrap: "break-word",
        }}
      >
        <Typography>{food.factors}</Typography>
      </DialogContent>
      <DialogTitle>
        <Typography>
          <Moment format="MMM/DD/yyyy hh:mm A">
            {food?.time?.toLocaleString()}
          </Moment>
        </Typography>
      </DialogTitle>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenDetail(false)}
        >
          Exit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="delete-button"
          onClick={() => onDelete(food.id)}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
