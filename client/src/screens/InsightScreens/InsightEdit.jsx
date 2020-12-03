import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  .title-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 70px;
    text-align: center;
  }
  .title {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 1000px) {
    .title {
      font-size: 2rem;
    }
  }
`;
const Form = styled.form`
  display: flex;
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
  }

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
  }
`;

export default function InsightUpdate({ handleUpdate, insights }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    body: "",
  });
  const { title, description, body } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const oneInsight = insights.find((insight) => {
        return insight.id === Number(id);
      });
      const { title, description, body } = oneInsight;
      setFormData({ title, description, body });
    };
    if (insights.length) {
      prefillFormData();
    }
  }, [insights, id]);

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
        <Typography className="title">Edit Insight</Typography>
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
            label="title"
            className="string-input title"
            autoFocus
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="input-container">
          <TextField
            label="description"
            required
            className="string-input description"
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="input-container">
          <TextField
            required
            multiline
            rowsMax={10}
            type="text"
            name="body"
            className="string-input content"
            label="content"
            value={body}
            onChange={handleChange}
            id="outlined-multiline-static"
            rows={4}
            variant="filled"
          />
        </div>
        <div className="buttons">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Button
            className="cancel"
            to="/insights"
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
