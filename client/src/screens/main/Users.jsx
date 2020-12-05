import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Helpers/Search";
import LinearProgress from "@material-ui/core/LinearProgress";
import Layout from "../../layouts/Layout/Layout";
import styled from "styled-components";
import { checkUserLength } from "../../utils/checkUserLength";
import { yellow, blue } from "@material-ui/core/colors";
import { DarkModeContext } from "../../components/Context/DarkModeContext";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ScrollToTopOnMount from "../../components/Helpers/ScrollToTopOnMount";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  .users-title {
    font-size: 2.3rem;
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
    font-size: 0.7rem;
    padding: 8px;
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
  .title-container {
    text-align: center;
    font-size: 2rem;
  }

  @media screen and (min-width: 1280px) {
    .users-title {
      font-size: 3.2rem;
    }
    .link {
      font-size: 1rem;
    }
  }
`;

const Users = ({ allUsers, loaded }) => {
  const [darkMode] = useContext(DarkModeContext);
  const [search, setSearch] = useState("");
  const getUsers = () =>
    allUsers.filter((user) =>
      user.name.toLowerCase().includes(`${search}`.toLowerCase())
    );

  const queriedUsers = React.Children.toArray(
    getUsers().map((user) => (
      <Link darkMode={darkMode} to={`/users/${user.id}`} className="link">
        <AccountCircleIcon className="user-icon" /> <h1>{user.name}</h1>
      </Link>
    ))
  );

  return (
    <Layout title="Community">
      <Div darkMode={{ darkMode }}>
        <ScrollToTopOnMount />
        <div className="title-container">
          <p> Search for a user!</p>
        </div>
        <Search setSearch={setSearch} />
        <div className="users-container">
          <>
            <p className="users-title">
              {checkUserLength(queriedUsers, loaded)}
            </p>
            {!loaded ? (
              <LinearProgress style={{ margin: "50px auto", width: "30vw" }} />
            ) : (
              queriedUsers
            )}
          </>
        </div>
      </Div>
    </Layout>
  );
};

export default Users;
