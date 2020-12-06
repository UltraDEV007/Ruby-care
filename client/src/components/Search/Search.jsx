import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";

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

  .icon {
    position: absolute;
    right: 50px;
  }

  input {
    width: 68vw;
    font-size: 18px;
    letter-spacing: 0.1px;
    padding: 12px;
    border: 1px solid pink;
    margin: 40px;
    text-align: center;
    box-shadow: 5px 5px peachpuff;
  }

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
    <Form onSubmit={handleSubmit}>
      <TextField
        type="text"
        name="search"
        id="search"
        placeholder={checkPath()}
        value={search}
        disableUnderline
        onChange={handleSearch}
        InputProps={{
          classes,
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
