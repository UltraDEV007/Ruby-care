import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { DialogTitle, DialogActions } from "../Form/DialogComponents";

export default function DeleteInsightFromDetail({
  insight,
  handleClose,
  openDelete,
  onDelete,
}) {
  return (
    <Dialog onClose={handleClose} open={openDelete}>
      <DialogTitle style={{ minWidth: "200px" }} onClose={handleClose}>
        Are you sure?
      </DialogTitle>
      <DialogActions
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Button variant="contained" color="primary" onClick={handleClose}>
          Exit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="delete-button"
          onClick={() => onDelete(insight.id)}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
