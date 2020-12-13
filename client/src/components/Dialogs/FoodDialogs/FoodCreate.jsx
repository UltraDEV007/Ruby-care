import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import CreateIcon from "@material-ui/icons/Create";
import "./FoodCreate.css";
import FormHelperText from "@material-ui/core/FormHelperText";
import NativeSelect from "@material-ui/core/NativeSelect";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
} from "../../Form/DialogComponents";

export default function FoodCreate({ open, onSave, handleClose }) {
  const [formData, setFormData] = useState({
    name: "",
    time: "",
    rating: 1,
    factors: "",
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
            Log food
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <div className="input-container">
            <TextField
              required
              autoFocus
              inputProps={{ maxLength: 20 }}
              type="text"
              name="name"
              label="Food/meal name"
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
                  ? "When did you eat this?"
                  : `When did you eat ${formData.name}?`
              }
              type="datetime-local"
              style={{ width: "300px", margin: "10px" }}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          {formData.name && (
            <div className="rating-input-container">
              <FormHelperText>
                On a scale of 1 to 5,
                <br /> how much did you enjoy&nbsp;
                {formData.name}?
              </FormHelperText>
              <NativeSelect
                native
                required
                label="rating"
                value={formData.rating}
                onChange={handleChange}
                inputProps={{
                  name: "rating",
                  id: "rating-native-simple",
                }}
              >
                <option value={1}>⭐</option>
                <option value={2}>⭐ ⭐ </option>
                <option value={3}>⭐ ⭐ ⭐ </option>
                <option value={4}>⭐ ⭐ ⭐ ⭐ </option>
                <option value={5}>⭐ ⭐ ⭐ ⭐ ⭐ </option>
              </NativeSelect>
            </div>
          )}

          <div className="input-container">
            <TextField
              name="factors"
              required
              id="factor-input"
              inputProps={{ maxLength: 131 }}
              label="What were the leading factors?"
              type="text"
              style={{ width: "300px", margin: "10px" }}
              value={formData.factors}
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
