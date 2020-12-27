import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
import "moment-timezone";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
} from "../../Form/DialogComponents";

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
          <Moment format="dddd, MMMM Do yyyy: hh:mm A">
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
