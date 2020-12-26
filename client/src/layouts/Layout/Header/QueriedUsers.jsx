import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import { yellow } from "@material-ui/core/colors";

const Div = styled.div`
  /* position: fixed; */
  /* background: ${({ darkMode }) =>
    darkMode === "dark" ? "white" : "#3788E5"}; */

  .user-icon {
    color: ${({ darkMode }) => (darkMode === "dark" ? yellow[700] : "#fff")};
    margin-right: 8px;
  }
  .user-image {
    height: 40px;
    width: 40px;
    border-radius: 40px;
    margin-right: 8px;
    object-fit: cover;
  }
`;

function QueriedUsers({ user, darkMode }) {
  return (
    <Div darkMode={darkMode}>
      <Link
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
      </Link>
    </Div>
  );
}

export default QueriedUsers;
