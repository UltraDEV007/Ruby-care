import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import ClearIcon from "@material-ui/icons/Clear";
import { yellow } from "@material-ui/core/colors";
import { useEffect, useState } from "react";

let Search = styled.div`
  position: relative;
  z-index: 9999999999;
  input {
    font-family: "Montserrat", sans-serif;
    color: ${({ darkMode }) => (darkMode === "dark" ? "black" : "white")};
    padding-left: 5px;
  }

  .icon {
    color: ${({ darkMode }) => (darkMode === "dark" ? "black" : "white")};
  }

  .icon.clear {
    cursor: pointer;
  }

  .dropdown-items {
    display: flex;
    flex-direction: column;
    align-items: start;
    z-index: 999999;
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
  top: 45px;
  z-index: 999999;

  background: ${({ darkMode }) =>
    darkMode === "dark" ? yellow[700] : "#3788E5"};
  box-shadow: -3px 5px 17px 1px #000;
`;

function HeaderSearch({ search, setSearch, darkMode, usersJSX, open }) {
  const [placeholder, setPlaceholder] = useState("Search Care");

  useEffect(() => {
    const changePlaceHolder = () => {
      const width = window?.innerWidth;
      if (width <= 468) {
        setPlaceholder("Search");
      } else {
        setPlaceholder("Search Care");
      }
    };
    changePlaceHolder();
    window.addEventListener("resize", changePlaceHolder);
    return () => {
      window.removeEventListener("resize", changePlaceHolder);
    };
  }, []);

  return (
    <>
      <Search open={open} darkMode={darkMode}>
        <StyledTextField
          darkMode={darkMode}
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: !search ? (
              <SearchIcon className="icon" />
            ) : (
              <ClearIcon onClick={() => setSearch("")} className="icon clear" />
            ),
          }}
        />
        <Dropdown darkMode={darkMode}>
          <div className="dropdown-items">{search && usersJSX}</div>
        </Dropdown>
      </Search>
    </>
  );
}

export default HeaderSearch;
