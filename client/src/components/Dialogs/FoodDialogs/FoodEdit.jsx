import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Link, useHistory, useParams } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function FoodEdit({ setOpenEdit, onSave, handleUpdate, foods }) {
  const history = useHistory("/");
  const [formData, setFormData] = useState({
    name: "",
    time: "",
    rating: "",
    factors: "",
  });
  const { name, time, rating, factors } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const oneFood = foods?.find((food) => {
        return food?.id === Number(id);
      });
      if (oneFood?.name === undefined) {
        history.push("/");
      } else {
        const { name, time, rating, factors } = oneFood;
        setFormData({ name, time, rating, factors });
      }
    };
    if (foods?.length) {
      prefillFormData();
    }
  }, [foods, id, history]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Dialog
        onClose={() => setOpenEdit(false)}
        aria-labelledby="customized-dialog-title"
        open={() => setOpenEdit(true)}
      >
        <DialogTitle>
          <Typography className="title">Edit Food</Typography>
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
                autoFocus
                inputProps={{ maxLength: 15 }}
                type="text"
                name="name"
                label="Food name"
                style={{ width: "300px", margin: "10px" }}
                value={name}
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
                  name ? `When did you eat ${name}?` : `When did you eat this?`
                }
                type="datetime-local"
                style={{ width: "300px", margin: "10px" }}
                value={time}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>

            {name && (
              <div className="rating-input-container">
                <FormHelperText>
                  On a scale of 1 to 5,
                  <br /> how much did you enjoy&nbsp;
                  {formData.name}?
                </FormHelperText>
                <Select
                  native
                  required
                  label="rating"
                  value={rating}
                  onChange={handleChange}
                  inputProps={{
                    name: "rating",
                    id: "rating-native-simple",
                  }}
                >
                  <option value={1}>⭐ </option>
                  <option value={2}>⭐ ⭐ </option>
                  <option value={3}>⭐ ⭐ ⭐ </option>
                  <option value={4}>⭐ ⭐ ⭐ ⭐ </option>
                  <option value={5}>⭐ ⭐ ⭐ ⭐ ⭐ </option>
                </Select>
              </div>
            )}

            <div className="input-container">
              <TextField
                inputProps={{ maxLength: 131 }}
                name="factors"
                required
                id="factor-input"
                label="What were the leading factors?"
                type="text"
                style={{ width: "300px", margin: "10px" }}
                value={factors}
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
    </>
  );
}
