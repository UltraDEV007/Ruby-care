import Button from "@material-ui/core/Button";
import { useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
import "moment-timezone";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
} from "../../Form/DialogComponents";
import { emojiLogic } from "../../../utils/emojiLogic";

export default function MoodDetail({
  mood,
  openDetail,
  onDelete,
  setOpenDetail,
}) {
  return (
    <Dialog
      onClose={() => setOpenDetail(false)}
      aria-labelledby="customized-dialog-title"
      open={openDetail}>
      <DialogTitle
        style={{ display: "flex", alignItems: "center" }}
        id="customized-dialog-title"
        onClose={() => setOpenDetail(false)}>
        {emojiLogic(mood.status)} &nbsp; {mood?.status}
      </DialogTitle>
      <DialogContent
        dividers
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          overflowWrap: "break-word",
        }}>
        <Typography>Reason:</Typography>
        <Typography style={{ marginTop: "2px" }}>
          <small>{mood.reason}</small>
        </Typography>
      </DialogContent>

      <DialogTitle>
        <Typography>
          <Moment format="dddd, MMMM Do yyyy: hh:mm A">
            {mood?.time?.toLocaleString()}
          </Moment>
        </Typography>
      </DialogTitle>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenDetail(false)}>
          Exit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="delete-button"
          onClick={() => onDelete(mood.id)}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
