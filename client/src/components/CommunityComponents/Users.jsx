import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { ThemeStateContext } from "../../context/ThemeStateContext";

const Users = ({ allUsers }) => {
  const [themeState] = useContext(ThemeStateContext);

  const usersJSX = allUsers.map((user) => (
    <Link
      key={user.id}
      themeState={themeState}
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
  ));

  return (
    <>
      <h1 className="users-title">Users</h1>
      <div className="queried-users">{usersJSX}</div>
    </>
  );
};

export default Users;
