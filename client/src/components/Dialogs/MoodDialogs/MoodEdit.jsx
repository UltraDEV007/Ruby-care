import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
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

export default function MoodEdit(props) {
  const [formData, setFormData] = useState({
    status: "",
    time: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const moodItem = props.moods?.find((mood) => mood?.id === Number(id));
      setFormData({
        status: moodItem?.status,
        time: moodItem?.time,
      });
    };
    if (props.moods?.length) {
      prefillForm();
    }
  }, [props.moods, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSave(id, formData);
  };

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
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.handleOpen}
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
          <Typography>Edit Mood</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <div>
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
          </div>

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
          <Button
            to="/"
            component={Link}
            variant="contained"
            color="secondary"
            onClick={props.handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
