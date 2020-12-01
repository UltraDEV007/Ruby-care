import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import { red, green, yellow } from "@material-ui/core/colors";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputs: {
    display: "flex",
    flexDirection: "row",
  },
});

const PoorRadio = withStyles({
  root: {
    color: red[500],
    "&$checked": {
      color: red[300],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const GoodRadio = withStyles({
  root: {
    color: green[700],
    "&$checked": {
      color: green[800],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const GreatRadio = withStyles({
  root: {
    color: green[500],
    "&$checked": {
      color: green[400],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const OkayRadio = withStyles({
  root: {
    color: yellow[600],
    "&$checked": {
      color: yellow[700],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function MoodEdit(props) {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    status: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const moodItem = props.moods.find((mood) => mood.id === Number(id));
      setFormData({
        status: moodItem.status,
      });
    };
    if (props.moods.length) {
      prefillForm();
    }
  }, [props.moods]);

  const handleChange = (e) => {
    const { name } = e.target;
    setFormData({
      status: name,
    });
  };

  return (
    <div className={classes.root}>
      <form
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault();
          props.handleUpdate(id, formData);
        }}
      >
        <h3>Edit Mood</h3>
        <div className={classes.inputs}>
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
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Button
          to="/"
          component={Link}
          type="submit"
          variant="contained"
          color="secondary"
        >
          Go Back
        </Button>
      </form>
    </div>
  );
}
