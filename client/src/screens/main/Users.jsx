import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Helpers/Search";
import { CircularProgress } from "@material-ui/core";
import Layout from "../../layouts/Layout/Layout";
import styled from "styled-components";
import { checkUserLength } from "../../utils/checkUserLength";
import { yellow, blue } from "@material-ui/core/colors";
import { DarkModeContext } from "../../components/Context/DarkModeContext";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  .title {
    font-size: 3rem;
    padding: 10px;
    margin-bottom: 5px;
  }
  .link {
    color: ${({ darkMode }) => (darkMode !== "dark" ? yellow[700] : blue[600])};
    text-decoration: none;
    overflow-wrap: break-word;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    font-family: "montserrat", sans-serif;
  }
  .user-icon {
    margin-top: 3px;
    margin-right: 5px;
    font-size: 36px;
  }
  .users-container {
    text-align: center;
  }
  @media screen and (min-width: 1000px) {
    .title {
      font-size: 4rem;
    }
    @media screen and (min-width: 1600px) {
      .title {
        font-size: 5rem;
      }
    }
  }
`;

const Users = ({ allUsers, loaded }) => {
  const [darkMode] = useContext(DarkModeContext);
  const USERS = React.Children.toArray(
    allUsers.map((user) => (
      <Link darkMode={darkMode} to={`/users/${user.id}`} className="link">
        <AccountCircleIcon className="user-icon" /> <h1>{user.name}</h1>
      </Link>
    ))
  );
  const [search, setSearch] = useState(false);
  const filteredUsers = allUsers.filter((user) =>
    user.name.toLowerCase().includes(`${search}`.toLowerCase())
  );

  const usersJSX = React.Children.toArray(
    filteredUsers.map((user) => (
      <Link darkMode={darkMode} to={`/users/${user.id}`} className="link">
        <h1>{user.name}</h1>
      </Link>
    ))
  );

  if (!loaded) {
    return (
      <Layout title="Community">
        <Div>
          <CircularProgress
            style={{ marginLeft: "50%", marginTop: "10%", width: "100px" }}
          />
        </Div>
      </Layout>
    );
  }
  return (
    <Layout title="Community">
      <Div darkMode={{ darkMode }}>
        <Search setSearch={setSearch} />
        <div className="users-container">
          <p className="title">{checkUserLength(usersJSX, allUsers)}</p>
          {search ? usersJSX : USERS}
        </div>
      </Div>
    </Layout>
  );
};

export default Users;
