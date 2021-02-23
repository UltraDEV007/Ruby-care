import { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { ThemeStateContext } from "../../../components/Context/ThemeStateContext";
import { Div, Form } from "./styledInsightEdit";

export default function InsightEdit({ handleUpdate, insights }) {
  const [themeState] = useContext(ThemeStateContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    body: "",
  });
  const { title, description, body } = formData;
  const { id } = useParams();

  const { goBack } = useHistory();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleUpdate(id, formData);
  };

  return (
    <Div themeState={themeState}>
      <div className="title-container">
        <Typography className="title">Edit Insight</Typography>
      </div>
      <Form onSubmit={handleSubmit}>
        <br />
        <div className="input-container">
          <TextField
            required
            label="title"
            inputProps={{ maxLength: 50 }}
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
            onClick={() => goBack()}
            className="cancel"
            variant="contained"
            color="secondary">
            Cancel
          </Button>
        </div>
      </Form>
    </Div>
  );
}
