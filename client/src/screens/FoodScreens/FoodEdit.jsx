import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
const Div = styled.div`
  margin: auto 40px;
`;
const Form = styled.form`
  display: flex;
    flex-direction: column;
}
  .buttons {
    margin-top: 20px;
  }
  .cancel{
    margin-left: 20px;
  }
  .rating-input-container{
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  }
`;

export default function FoodEdit({ handleUpdate, foods }) {
  const [formData, setFormData] = useState({
    name: "",
    time: "",
    rating: "",
  });
  const { name, time, rating } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const oneFood = foods?.find((food) => {
        return food?.id === Number(id);
      });
      // this gets rid of undefined error when searching a edit path by id of a food that is deleted/doesn't exist
      if (oneFood?.name === undefined) {
        window.history.back();
      } else {
        const { name, time, rating } = oneFood;
        setFormData({ name, time, rating });
      }
    };
    if (foods?.length) {
      prefillFormData();
    }
  }, [foods, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Div>
      <div className="title-container">
        <Typography className="title">Edit Food</Typography>
      </div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id, formData);
        }}
      >
        <br />
        <div className="input-container">
          <TextField
            required
            autoFocus
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
            label="When did you eat this?"
            type="datetime-local"
            style={{ width: "300px", margin: "10px" }}
            value={time}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div className="rating-input-container">
          <FormHelperText>
            on a scale of 1/5 did much did you enjoy it?
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
        <br />

        <div className="buttons">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Button
            className="cancel"
            to="/"
            component={Link}
            variant="contained"
            color="secondary"
          >
            Cancel
          </Button>
        </div>
      </Form>
    </Div>
  );
}
