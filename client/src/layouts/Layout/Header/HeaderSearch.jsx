import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import Card from "@material-ui/core/Card";

let Search = styled.div`
  position: relative;
  input {
    font-family: "Montserrat", sans-serif;
    color: ${({ darkMode }) => (darkMode === "dark" ? "black" : "white")};
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

const Dropdown = styled(Card)`
  position: absolute;
  min-width: 250px;
  top: 35px;
  background: ${({ darkMode }) => (darkMode === "dark" ? "white" : "#3788E5")};
`;

function HeaderSearch({ search, setSearch, darkMode, queriedUsers }) {
  return (
    <>
      <Search darkMode={darkMode}>
        <StyledTextField
          darkMode={darkMode}
          type="text"
          placeholder="Search Care"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon className="icon" />,
            // classes: { underline: classes.underline },
          }}
        />
        <Dropdown darkMode={darkMode}>{search && queriedUsers}</Dropdown>
      </Search>
    </>
  );
}

export default HeaderSearch;
