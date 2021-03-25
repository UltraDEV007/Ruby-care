// components
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { DialogTitle, DialogActions } from "../Form/DialogComponents";

// services and utils
import { destroyUser } from "../../services/users";
import { removeToken } from "../../services/auth";
import { useHistory } from "react-router-dom";

export default function UserDelete({
  currentUser,
  openDelete,
  setOpenDelete,
  dispatchAllUsers,
  dispatchCurrentUser,
}) {
  const { push } = useHistory();

  const handleClose = () => {
    setOpenDelete(false);
  };

  const handleDelete = async (id) => {
    await destroyUser(id);

    dispatchAllUsers({ type: "USER_REMOVED", payload: currentUser });

    dispatchCurrentUser({ type: "REMOVE_USER" });
    localStorage.removeItem("authToken");
    removeToken();
    push("/login");

    setOpenDelete(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={openDelete}
    >
      <DialogTitle
        style={{ minWidth: "200px" }}
        id="customized-dialog-title"
        onClose={handleClose}
      >
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
          onClick={() => handleDelete(currentUser.id)}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
