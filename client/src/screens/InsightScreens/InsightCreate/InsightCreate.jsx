import { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { ThemeStateContext } from "../../../context/ThemeStateContext";
import HelpIcon from "@material-ui/icons/Help";
import { Div, Form } from "./styledInsightCreate.js";

export default function InsightCreate(props) {
  const [themeState] = useContext(ThemeStateContext);
  const [openAbout, setOpenAbout] = useState(false);

  const handleOpen = () => {
    setOpenAbout(!openAbout);
  };

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
    <Div themeState={themeState}>
      <div className="title-container">
        <Typography className="title">
          Help the community by sharing an insight!
          <HelpIcon className="about-icon" onClick={handleOpen} />
        </Typography>
        {openAbout && (
          <div className="about-container">
            <Typography>
              an insight is information or a personal experience that is
              educational, actionable, and/or reassuring to the community.
            </Typography>
          </div>
        )}
        <Typography className="warning">
          Write something appropriate! everybody will see it.
        </Typography>
      </div>
      <Form onSubmit={handleSubmit}>
        <br />
        <div className="input-container">
          <TextField
            required
            className="string-input"
            label="title"
            autoFocus
            inputProps={{ maxLength: 50 }}
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
            color="secondary">
            Cancel
          </Button>
        </div>
      </Form>
    </Div>
  );
}
