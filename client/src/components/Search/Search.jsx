import React from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

function Search({ search, setSearch }) {
  const classes = useStyles();
  let location = useLocation();

  const checkPath = () => {
    if (
      location.pathname === "/insights" ||
      location.pathname === "/insights/"
    ) {
      return "Search by insight title or user";
    }
    if (location.pathname === "/users" || location.pathname === "/users/")
      return "Search by user's name";
  };

  return (
    <div className={classes.root}>
      <TextField
        type="text"
        name="search"
        id="search"
        placeholder={checkPath()}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      id="standard-full-width" label="Label" style={{ margin: 8 }}
      placeholder="Placeholder" helperText="Full width!" fullWidth
      margin="normal" InputLabelProps=
      {{
        shrink: true,
      }}
    </div>
  );
}

export default Search;
