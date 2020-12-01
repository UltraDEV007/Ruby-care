import { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

// import { makeStyles } from "@material-ui/styles";

// const useStyles = makeStyles({
//   root: {
//     height: "100vh",
//   },
// });

const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  .buttons {
    margin-top: 20px;
  }
  .cancel {
    margin-left: 10px;
  }
`;

export default function InsightCreate(props) {
  // const classes = useStyles(props);
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

  return (
    <Div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleCreate(formData);
        }}
      >
        <h3>Create Insight</h3>
        <br />
        <TextField
          required
          label="title"
          autoFocus
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />

        <TextField
          label="description"
          required
          autoFocus
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <TextField
          required
          autoFocus
          multiline
          rowsMax={10}
          type="text"
          name="body"
          label="content"
          value={formData.body}
          onChange={handleChange}
          id="outlined-multiline-static"
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
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
