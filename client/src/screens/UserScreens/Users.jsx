import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchUser from "../../components/UserComponents/SearchUser";
import { CircularProgress } from "@material-ui/core";

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
  const [search, setSearch] = useState(USERS);
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

  return (
    <div>
      <SearchUser setSearch={setSearch} />
      {usersJSX}
    </div>
  );
};

export default Users;
