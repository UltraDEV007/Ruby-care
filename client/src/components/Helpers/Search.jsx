import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Form = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    width: 50vw;
    font-size: 18px;
    letter-spacing: 0.1px;
    padding: 12px 20px 12px 40px;
    border: 1px solid pink;
    margin: 40px;
    text-align: center;
    box-shadow: 5px 5px peachpuff;
  }
  input:focus {
    outline: none;
  }
`;

function Search({ search, setSearch }) {
  let location = useLocation();

  return (
    <Form>
      <input
        type="text"
        name="search"
        id="search"
        placeholder={
          location.pathname === "/insights/"
            ? "Search by insight title or user's name"
            : "Search by user's name"
        }
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Form>
  );
}

export default Search;
