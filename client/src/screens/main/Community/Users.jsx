import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Search from "../../../components/Search/Search";
import LinearProgress from "@material-ui/core/LinearProgress";
import Layout from "../../../layouts/Layout/Layout";
import { checkUserLength } from "../../../utils/checkUserLength";
import { ThemeStateContext } from "../../../context/ThemeStateContext";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ScrollToTopOnMount from "../../../components/Helpers/ScrollToTopOnMount";
import Div from "./styledUsers";

const Users = ({ allUsers, usersAreLoading }) => {
  const [themeState] = useContext(ThemeStateContext);
  const [search, setSearch] = useState("");

  const getQueriedUsers = () =>
    allUsers.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );

  const usersJSX = getQueriedUsers().map((user) => (
    <Link
      key={user.id}
      themeState={themeState}
      to={`/users/${user.id}`}
      className="link">
      {!user?.image ? (
        <AccountCircleIcon className="user-icon" />
      ) : (
        <img className="user-image" src={user?.image} alt={user?.name} />
      )}
      <h1>{user?.name}</h1>
    </Link>
  ));

  return (
    <Layout title="Community">
      <Div themeState={{ themeState }}>
        <ScrollToTopOnMount />
        <div className="title-container">
          <p> Search for a user!</p>
        </div>
        <Search setSearch={setSearch} />
        <div className="users-container">
          <>
            <p className="users-title">
              {checkUserLength(usersJSX, usersAreLoading)}
            </p>
            {usersAreLoading ? (
              <LinearProgress style={{ margin: "50px auto", width: "30vw" }} />
            ) : (
              <div className="queried-users">{usersJSX}</div>
            )}
          </>
        </div>
      </Div>
    </Layout>
  );
};

export default Users;
