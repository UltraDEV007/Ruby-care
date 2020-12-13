import { red, green, yellow } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";

export const PoorRadio = withStyles({
  root: {
    color: red[500],
    "&$checked": {
      color: red[300],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export const GoodRadio = withStyles({
  root: {
    color: green[700],
    "&$checked": {
      color: green[800],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export const GreatRadio = withStyles({
  root: {
    color: green[500],
    "&$checked": {
      color: green[400],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export const OkayRadio = withStyles({
  root: {
    color: yellow[600],
    "&$checked": {
      color: yellow[700],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
