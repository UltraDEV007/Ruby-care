import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import CreateIcon from "@material-ui/icons/Create";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
} from "../../Form/DialogComponents";

export default function SymptomCreate({ open, onSave, handleClose }) {
  const [formData, setFormData] = useState({
    name: "",
    time: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "time" && value) {
      let date = new Date(value);
      value = date.toISOString();
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
        }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CreateIcon style={{ marginRight: "10px" }} />
            Log symptom
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <div className="input-container">
            <TextField
              required
              autoFocus
              type="text"
              name="name"
              inputProps={{ maxLength: 32 }}
              label="Enter symptom"
              style={{ width: "300px", margin: "10px" }}
              value={formData.name}
              onChange={handleChange}
              id="outlined-multiline-static"
              variant="filled"
            />
          </div>

          <div className="input-container">
            <TextField
              name="time"
              required
              id="datetime-local"
              label={
                !formData.name
                  ? `When did this happen?`
                  : `When did ${formData.name} happen?`
              }
              type="datetime-local"
              style={{ width: "300px", margin: "10px" }}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
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
