import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
import "moment-timezone";
import CreateIcon from "@material-ui/icons/Create";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
} from "../../Form/DialogComponents";

export default function MoodCreate({ open, onSave, handleClose }) {
  const [formData, setFormData] = useState({
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  let time = new Date();

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(formData);
          // setting the formData to an empty string after submission to avoid the case
          // where the user makes creates another one right after sending one without refreshing.
          setFormData("");
        }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CreateIcon style={{ marginRight: "10px" }} />
            Write something nice!
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <Typography>
            Today, <Moment format="dddd MMMM Do yyyy: hh:mm A">{time}</Moment>
          </Typography>

          <div className="input-container">
            <TextField
              required
              autoFocus
              multiline
              rowsMax={10}
              type="text"
              name="content"
              label="Enter affirmation"
              style={{ width: "330px" }}
              value={formData.content}
              onChange={handleChange}
              id="outlined-multiline-static"
              rows={4}
              variant="filled"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
