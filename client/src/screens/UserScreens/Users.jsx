import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Helpers/Search";
import { CircularProgress } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Layout from "../../layouts/Layout/Layout";
import styled from "styled-components";
import Typography from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  .title {
    font-size: 1.2rem;
    padding: 10px;
  }
  .users-container {
    text-align: center;
  }
  @media screen and (min-width: 1000px) {
    .title {
      font-size: 2rem;
    }
    @media screen and (min-width: 1600px) {
      .title {
        font-size: 3rem;
      }
    }
  }
`;

const Users = ({ allUsers, loaded }) => {
  const USERS = React.Children.toArray(
    allUsers.map((user) => (
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/users/${user.id}`}
      >
        <h1>{user.name}</h1>
      </Link>
    ))
  );
  const [search, setSearch] = useState(false);
  const filteredUsers = allUsers.filter((user) =>
    user.name.toLowerCase().includes(`${search}`.toLowerCase())
  );

  const usersJSX = React.Children.toArray(
    filteredUsers.map((user) => (
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/users/${user.id}`}
      >
        <h1>{user.name}</h1>
      </Link>
    ))
  );

  if (!loaded) {
    return (
      <CircularProgress
        style={{ marginLeft: "50%", marginTop: "10%", width: "50px" }}
      />
    );
  }

  const checkUserLength = () => {
    if (usersJSX.length === 0) {
      return <>No users found</>;
    } else if (usersJSX.length === 1) {
      return <>User:</>;
    } else return <>Users</>;
  };

  return (
    <Layout title="Community">
      <Div>
        <Search setSearch={setSearch} />
        <div className="users-container">
          <p className="title">{checkUserLength()}</p>
          {search ? usersJSX : USERS}
        </div>
      </Div>
    </Layout>
  );
};

export default Users;
