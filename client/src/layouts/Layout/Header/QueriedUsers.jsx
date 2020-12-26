import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: ${({ darkMode }) => (darkMode === "dark" ? "black " : "white")};
  text-decoration: none;
  overflow-wrap: break-word;
  font-size: 0.6rem;
  padding: 8px;
  font-family: "montserrat", sans-serif;
  transition: transform 300ms ease-in-out;
  display: inline-flex;
  align-items: center;

  &:hover {
    transition: transform 300ms ease-in-out;
    text-decoration: underline;
    cursor: pointer;
    transform: translateY(-1.06px);
  }

  .user-icon {
    color: ${({ darkMode }) => (darkMode === "dark" ? "black" : "#fff")};
    margin-right: 8px;
    font-size: 30px;
  }

  .user-image {
    height: 30px;
    width: 30px;
    border-radius: 40px;
    margin-right: 8px;
    object-fit: cover;
  }
`;

function QueriedUsers({ user, darkMode }) {
  return (
    <StyledLink
      key={user.id}
      darkMode={darkMode}
      to={`/users/${user.id}`}
      className="link"
    >
      {!user?.image ? (
        <AccountCircleIcon className="user-icon" />
      ) : (
        <img className="user-image" src={user?.image} alt={user?.name} />
      )}
      <h1>{user?.name}</h1>
    </StyledLink>
  );
}

export default QueriedUsers;
