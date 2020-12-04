import React from "react";
import styled from "styled-components";

const Form = styled.div`
  padding-top: 50px;
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

const Search = ({ search, setSearch }) => (
  <Form>
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Search Users"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </Form>
);

export default Search;
