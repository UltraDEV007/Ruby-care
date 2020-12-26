import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

let Search = styled.div`
  input {
    font-family: "Montserrat", sans-serif;
    color: ${({ darkMode }) => (darkMode === "dark" ? "black" : "white")};
    &::placeholder {
      /* color: ${({ darkMode }) =>
        darkMode === "dark" ? "black" : "white"}; */
    }
  }
  .icon {
    color: ${({ darkMode }) => (darkMode === "dark" ? "black" : "white")};
  }
`;

// https://stackoverflow.com/questions/57602072/how-to-customize-material-ui-textfield-input-underlineafter
const StyledTextField = styled(TextField)`
  /* default */
  .MuiInput-underline:before {
    border-bottom: ${({ darkMode }) =>
      darkMode === "dark" ? "1px solid black" : "1px solid white"};
  }
  /* hover (double-ampersand needed for specificity reasons. */
  && .MuiInput-underline:hover:before {
    border-bottom: ${({ darkMode }) =>
      darkMode === "dark" ? "1px solid black" : "1px solid white"};
  }
  /* focused */
  .MuiInput-underline:after {
    border-bottom: ${({ darkMode }) =>
      darkMode === "dark" ? "1px solid black" : "1px solid white"};
  }
`;

const useStyles = makeStyles({
  underline: {
    color: "red",
    "&::after": {
      border: "2px solid red",
    },
  },
});

function HeaderSearch({ search, setSearch, darkMode }) {
  const classes = useStyles();
  return (
    <Search darkMode={darkMode}>
      <StyledTextField
        darkMode={darkMode}
        type="text"
        placeholder="Search Care"
        value={search}
        className={classes.underline}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: <SearchIcon className="icon" />,
          // classes: { underline: classes.underline },
        }}
      />
    </Search>
  );
}

export default HeaderSearch;
