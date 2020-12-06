import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import { DarkModeContext } from "../Context/DarkModeContext";
import { blue, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
});

const Form = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::placeholder {
    color: ${({ darkMode }) => (darkMode === "dark" ? "#fff" : `inherit`)};
  }
  .icon {
    position: absolute;
    right: 20px;
  }
  input {
    width: 68vw;
    font-size: 18px;
    letter-spacing: 0.1px;
    padding: 12px;
    border: ${({ darkMode }) =>
      darkMode === "dark"
        ? `1px solid ${yellow[700]}`
        : `1px solid ${blue[500]}`};
    text-align: left;
    box-shadow: 5px 5px peachpuff;
    box-shadow: ${({ darkMode }) =>
      darkMode === "dark" ? `5px 5px${yellow[700]}` : `5px 5px ${blue[500]}`};
  }
  /* "5px 5px peachpuff;" */
  @media screen and (min-width: 1200px) {
    input {
      width: 50vw;
    }
  }
  input:focus {
    outline: none;
  }
`;

function Search({ search, setSearch }) {
  const [darkMode] = useContext(DarkModeContext);
  let location = useLocation();
  const classes = useStyles();
  const [searchEnabled, setSearchEnabled] = useState(false);

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

  const handleSearch = (e) => {
    if (searchEnabled) {
      setSearch(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(e);
  };

  const onSearch = () => {
    setSearchEnabled(true);
    setSearch(document.getElementById("search").value);
  };

  const onClearSearch = () => {
    setSearch("");
    setSearchEnabled(false);
  };

  return (
    <Form darkMode={darkMode} onEnter={onSearch} onSubmit={handleSubmit}>
      <TextField
        type="text"
        name="search"
        id="search"
        placeholder={checkPath()}
        value={search}
        disableUnderline
        onChange={handleSearch}
        InputProps={{
          endAdornment: (
            <InputAdornment className="icon">
              <IconButton>
                {searchEnabled ? (
                  <ClearIcon onClick={onClearSearch} />
                ) : (
                  <SearchIcon onClick={onSearch} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Form>
  );
}

export default Search;
