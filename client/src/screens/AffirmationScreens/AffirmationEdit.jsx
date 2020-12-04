import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
const Div = styled.div`
  padding: "20px";
  margin: auto 40px;
`;
const Form = styled.form`
  padding: "20px";
`;

export default function AffirmationEdit({ handleUpdate, affirmations }) {
  const [formData, setFormData] = useState({
    content: "",
  });
  const { content } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const oneAffirmation = affirmations?.find((affirmation) => {
        return affirmation?.id === Number(id);
      });
      const { content } = oneAffirmation;
      setFormData({ content });
    };
    if (affirmations?.length) {
      prefillFormData();
    }
  }, [affirmations, id]);

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
        <Typography className="title">Edit Affirmation</Typography>
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
            label="content"
            variant="filled"
            className="string-input title"
            autoFocus
            multiline
            rows={4}
            type="text"
            name="content"
            value={content}
            onChange={handleChange}
          />
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
