import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import CreateIcon from "@material-ui/icons/Create";
import FormHelperText from "@material-ui/core/FormHelperText";
import NativeSelect from "@material-ui/core/NativeSelect";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
} from "../../Form/DialogComponents";

export default function MedCreate({ RXGuideMeds, open, onSave, handleClose }) {
  const [formData, setFormData] = useState({
    name: "",
    medication_class: "",
    reason: "",
    image: "",
    time: "",
  });

  const MEDS = React.Children.toArray(
    RXGuideMeds.map((med) => (
      <>
        <option value="" selected disabled hidden>
          Select a medication
        </option>
        <option>{med.fields.name}</option>
      </>
    ))
  );

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

  const handleSelectedMed = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const medicine = RXGuideMeds.find(
      (med) => med.fields.name === formData.name
    );

    const selectedMedData = {
      ...formData,
      image: medicine?.fields.image,
      medication_class: medicine?.fields.class,
    };
    onSave(selectedMedData);
    // setting the formData to an empty string after submission to avoid the case
    // where the user makes creates another one right after sending one without refreshing.
    setFormData("");
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}>
      <form onSubmit={handleSubmit}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CreateIcon style={{ margin: "10px" }} />
            Log medication
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <div className="input-container">
            <FormHelperText>Please select a medication</FormHelperText>
            <NativeSelect
              className="select-css"
              name="name"
              required
              type="text"
              defaultValue="select"
              value={formData.name}
              onChange={handleSelectedMed}
              style={{ margin: "10px" }}>
              {MEDS}
            </NativeSelect>
          </div>

          <div className="input-container">
            <TextField
              className="select-css"
              name="reason"
              type="text"
              required
              label={
                !formData.name
                  ? `Why do you take your medicaiton?`
                  : `Why do you take ${formData.name}?`
              }
              style={{ display: "flex", width: "300px", margin: "10px" }}
              value={formData.reason}
              onChange={handleChange}
            />
          </div>

          <div className="input-container">
            <TextField
              name="time"
              required
              id="datetime-local"
              label={
                formData.name
                  ? `When do you take ${formData.name}?`
                  : `When do you take this medication?`
              }
              type="datetime-local"
              style={{ width: "300px", margin: "10px" }}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <DialogActions>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </form>
    </Dialog>
  );
}
