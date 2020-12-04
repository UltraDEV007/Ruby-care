import { useState, useContext } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { DarkModeContext } from "../../components/Context/DarkModeContext";
import { grey } from "@material-ui/core/colors";

const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ darkMode }) => (darkMode === "dark" ? grey[800] : "#fff")};
  .title-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 70px;
    text-align: center;
  }
  .title {
    font-size: 1.2rem;
    color: ${({ darkMode }) => (darkMode === "dark" ? grey[100] : "#000")};
  }
  .warning {
    color: red;
    font-size: 1rem;
    margin-top: 30px;
    margin-bottom: -20px;
  }

  @media screen and (min-width: 1000px) {
    .title {
      font-size: 2rem;
    }
    .warning {
      font-size: 1.5rem;
      margin-bottom: 20px;
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

export default function InsightCreate(props) {
  const [darkMode] = useContext(DarkModeContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.handleCreate(formData);
  };

  return (
    <Div darkMode={darkMode}>
      <div className="title-container">
        <Typography className="title">
          Help the community by sharing an insight!
        </Typography>
        <Typography className="warning">
          Write something appropriate! everybody will see it.
        </Typography>
      </div>
      <Form onSubmit={handleSubmit}>
        <br />
        <div className="input-container">
          <TextField
            required
            className="string-input title"
            label="title"
            autoFocus
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="input-container">
          <TextField
            className="string-input description"
            label="description"
            required
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <br />
        <div className="input-container content">
          <TextField
            required
            multiline
            rowsMax={10}
            type="text"
            name="body"
            label="content"
            value={formData.body}
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
