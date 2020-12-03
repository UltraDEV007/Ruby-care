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
  /* height: 50px;
  display: flex;
  flex-direction: column;
  .title-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
  }
  .title {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 1000px){
    .title {
    font-size: 2rem;
  } */
`;
const Form = styled.form`
  padding: "20px";
  /* display: flex;
  flex-direction: column;
  margin: 20px auto;
  
  .input-container {
    margin: 10px;
  }
  .string-input {
    min-width: 235px;
    width: 235px;
  }
  #outlined-multiline-static {
    width: 218px;
    min-height: 10vh;
    max-height: 12vh;
  }
  .content {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .buttons {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
  .cancel {
    margin-left: 20px;
  } */
  /* 
  @media screen and (min-width: 1000px) {
    #outlined-multiline-static {
      min-width: 500px;
      min-height: 15vh;
    }
    .string-input {
      min-width: 520px;
    }
    .cancel {
      margin-left: 50px;
    }
    .input-container {
      margin: 20px;
    }
  } */
`;

export default function AffirmationEdit({ handleUpdate, affirmations }) {
  const [formData, setFormData] = useState({
    content: "",
  });
  const { content } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const oneAffirmation = affirmations.find((insight) => {
        return insight.id === Number(id);
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
