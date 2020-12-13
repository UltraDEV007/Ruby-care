import { useState } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
import "moment-timezone";
import TextField from "@material-ui/core/TextField";
import {
  PoorRadio,
  OkayRadio,
  GoodRadio,
  GreatRadio,
} from "../../Form/RadioButtons";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
} from "../../Form/DialogComponents";

export default function MoodCreate({ open, onSave, handleClose }) {
  const [formData, setFormData] = useState({
    status: "Okay",
    time: "",
  });

  const handleChange = (e) => {
    const { name } = e.target;
    setFormData({
      status: name,
    });
  };

  const handleTime = (e) => {
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
          How are you feeling?
        </DialogTitle>
        <DialogContent dividers>
          {formData.time && (
            <Typography>
              <Moment format="dddd, MMMM Do yyyy: hh:mm A">
                {formData.time}
              </Moment>
            </Typography>
          )}
          <FormLabel>
            Poor
            <PoorRadio
              type="radio"
              name="Poor"
              checked={formData.status === "Poor"}
              onChange={handleChange}
            />
          </FormLabel>
          <FormLabel>
            Okay
            <OkayRadio
              type="radio"
              name="Okay"
              checked={formData.status === "Okay"}
              onChange={handleChange}
            />
          </FormLabel>
          <FormLabel>
            Good
            <GoodRadio
              type="radio"
              name="Good"
              checked={formData.status === "Good"}
              onChange={handleChange}
            />
          </FormLabel>
          <FormLabel>
            Great
            <GreatRadio
              type="radio"
              name="Great"
              checked={formData.status === "Great"}
              onChange={handleChange}
            />
          </FormLabel>

          <div className="input-container">
            <TextField
              name="time"
              required
              id="datetime-local"
              label={`Please choose a time`}
              type="datetime-local"
              style={{ width: "300px", margin: "10px" }}
              onChange={handleTime}
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
