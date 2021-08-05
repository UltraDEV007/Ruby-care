import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import FormHelperText from "@material-ui/core/FormHelperText";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
} from "../../Form/DialogComponents";

export default function SymptomEdit({
  onSave,
  handleOpen,
  handleClose,
  symptoms,
}) {
  const [formData, setFormData] = useState({
    name: "",
    time: "",
  });
  const { name } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const oneSymptom = symptoms?.find((symptom) => {
        return symptom?.id === Number(id);
      });
      const { name, time } = oneSymptom;
      setFormData({ name, time });
    };
    if (symptoms?.length) {
      prefillFormData();
    }
  }, [symptoms, id]);

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
    <Dialog onClose={handleClose} open={handleOpen}>
      <DialogTitle onClose={handleClose}>
        <Typography className="title">Edit Symptom</Typography>
      </DialogTitle>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave(id, formData);
        }}
      >
        <DialogContent dividers>
          <div className="input-container">
            <TextField
              required
              label="Symptom"
              autoFocus
              type="text"
              name="name"
              inputProps={{ maxLength: 32 }}
              value={name}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="input-container">
            {!name ? (
              <FormHelperText>When did this happen?</FormHelperText>
            ) : (
              <FormHelperText>When did {name} happen?</FormHelperText>
            )}
            <TextField
              required
              type="datetime-local"
              name="time"
              onChange={handleChange}
            />
          </div>
          <br />

          <DialogActions>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
            <Button
              to="/"
              component={Link}
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </form>
    </Dialog>
  );
}
