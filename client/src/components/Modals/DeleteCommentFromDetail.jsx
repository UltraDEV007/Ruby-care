import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { DialogTitle, DialogActions } from "../Form/DialogComponents";

export default function DeleteCommentFromDetail({
  insight,
  comment,
  handleClose,
  openDelete,
  onDelete,
}) {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={openDelete}>
      <DialogTitle
        style={{ minWidth: "200px" }}
        id="customized-dialog-title"
        onClose={handleClose}>
        Are you sure?
      </DialogTitle>
      <DialogActions
        style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Exit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="delete-button"
          onClick={() => onDelete(insight.id, comment.id)}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
