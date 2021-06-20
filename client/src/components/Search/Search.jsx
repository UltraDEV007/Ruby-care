import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import { ThemeStateContext } from "../../context/ThemeStateContext";
import Form from "./styledSearch";

function Search({ search, setSearch, placeholder }) {
  const [themeState] = useContext(ThemeStateContext);
  const [searchEnabled, setSearchEnabled] = useState(false);
  let location = useLocation();

  const checkPath = () => {
    if (location.pathname.includes("/insights")) {
      return "Search by insight or user";
    }
    return "Search by user";
  };

  const handleSearch = (e) => {
    if (searchEnabled) {
      setSearch(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleSearch();
    handleSearch(e);
  };

  const toggleSearch = () => {
    if (searchEnabled) {
      setSearch("");
      setSearchEnabled(false);
    } else {
      setSearchEnabled(true);
      setSearch(document.getElementById("search").value);
    }
  };

  return (
    <Form themeState={themeState} onSubmit={handleSubmit}>
      <TextField
        type="text"
        name="search"
        id="search"
        placeholder={placeholder ?? checkPath()}
        value={search}
        onChange={handleSearch}
        inputProps={{ maxLength: 70 }}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment onClick={toggleSearch} className="icon">
              <div className="vl"></div>
              <IconButton>
                {searchEnabled ? <ClearIcon /> : <SearchIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Form>
  );
}

export default Search;
