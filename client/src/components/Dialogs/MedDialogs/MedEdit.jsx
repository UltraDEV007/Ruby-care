import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import FormHelperText from "@material-ui/core/FormHelperText";
import NativeSelect from "@material-ui/core/NativeSelect";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
} from "../../Form/DialogComponents";
import { compareTakenWithSelectedTime } from "../../../utils/compareDateWithCurrentTime";

export default function MedEdit({
  RXGuideMeds,
  onSave,
  handleOpen,
  handleClose,
  meds,
  taken,
}) {
  const [formData, setFormData] = useState({
    name: "",
    medication_class: "",
    reason: "",
    image: "",
    time: new Date(),
    is_taken: false,
  });

  const { name } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const oneMed = meds?.find((med) => {
        return med?.id === Number(id);
      });
      const { name, medication_class, image, reason, time, is_taken } = oneMed;
      setFormData({ name, medication_class, image, time, reason, is_taken });
    };
    if (meds?.length) {
      prefillFormData();
    }
  }, [meds, id]);

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

    const foundMed = meds?.find((med) => {
      return med?.id === Number(id);
    });

    if (foundMed.is_taken) {
      if (
        compareTakenWithSelectedTime(foundMed.taken_date, formData.time) === 1
      ) {
        setFormData((prevState) => ({
          ...prevState,
          is_taken: false,
          taken_date: null,
        }));
      } else {
        setFormData((prevState) => ({
          ...prevState,
          is_taken: true,
          taken_date: formData.time,
        }));
      }
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
      medication_class: medicine?.fields.medClass,
    };
    onSave(id, selectedMedData);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={handleOpen}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Typography className="title">Edit Medication</Typography>
      </DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <div className="input-container">
            <FormHelperText>Please select a medication</FormHelperText>
            <NativeSelect
              className="select-css"
              name="name"
              required
              type="text"
              style={{ marginLeft: "10px" }}
              defaultValue="select"
              value={name}
              onChange={handleSelectedMed}>
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
                name && taken === false
                  ? `Why do you take ${formData.name}?`
                  : !name
                  ? `Why do you take your medicaiton?`
                  : name && taken === true
                  ? `Why did you take ${formData.name}?`
                  : name && taken === false
                  ? `Why did you take your medication?`
                  : `Why do you take this medication?`
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
                name && taken === false
                  ? `When do you take ${formData.name}?`
                  : !name
                  ? `When do you take this medication?`
                  : name && taken === true
                  ? `When did you take ${formData.name}?`
                  : name && taken === false
                  ? `When did you take your medication?`
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
            <Button to="/" type="submit" variant="contained" color="primary">
              Save
            </Button>
            <Button
              to="/"
              component={Link}
              variant="contained"
              color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </form>
    </Dialog>
  );
}
