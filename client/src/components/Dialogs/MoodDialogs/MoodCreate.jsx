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
import { compareDateWithCurrentTime } from "../../../utils/compareDateWithCurrentTime";

export default function MoodCreate({ open, onSave, handleClose }) {
  const [formData, setFormData] = useState({
    status: "Okay",
    time: new Date().toISOString(),
    reason: "",
  });

  const handleStatus = (e) => {
    const { name } = e.target;
    setFormData((prevState) => ({
      // spreading through previous state so date doesn't give "invalid date on submission"
      ...prevState,
      status: name,
    }));
  };

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
      open={open}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(formData);
          // setting the formData to an empty string after submission to avoid the case
          // where the user makes creates another one right after sending one without refreshing.
          setFormData({ ...formData, status: formData.status });
        }}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {compareDateWithCurrentTime(formData.time) === 1 && formData.time ? (
            <>How were you feeling? </>
          ) : (
            <>How are you feeling?</>
          )}
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
              onChange={handleStatus}
            />
          </FormLabel>
          <FormLabel>
            Okay
            <OkayRadio
              type="radio"
              name="Okay"
              checked={formData.status === "Okay"}
              onChange={handleStatus}
            />
          </FormLabel>
          <FormLabel>
            Good
            <GoodRadio
              type="radio"
              name="Good"
              checked={formData.status === "Good"}
              onChange={handleStatus}
            />
          </FormLabel>
          <FormLabel>
            Great
            <GreatRadio
              type="radio"
              name="Great"
              checked={formData.status === "Great"}
              onChange={handleStatus}
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
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <div className="input-container">
            <TextField
              className="select-css"
              name="reason"
              type="text"
              required
              label={
                compareDateWithCurrentTime(formData.time) === 1 && formData.time
                  ? `why did you feel this way?`
                  : `why do you feel this way?`
              }
              style={{ display: "flex", width: "300px", margin: "10px" }}
              value={formData.reason}
              onChange={handleChange}
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
