import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { CurrentUserContext } from "../../components/Context/CurrentUserContext";
import styled from "styled-components";
import Moment from "react-moment";
import Typography from "@material-ui/core/Typography";
import { DarkModeContext } from "../../components/Context/DarkModeContext";
import { grey, yellow } from "@material-ui/core/colors";
import { goBack } from "../../utils/goBack";
import LinearProgress from "@material-ui/core/LinearProgress";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Wrapper = styled.div`
  min-height: 100vh;
  max-height: 100%;
  background: ${({ darkMode }) => (darkMode === "dark" ? grey[800] : "#fff")};
  .content-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 20px;
    }
    .buttons2 {
      display: flex;
      flex-direction: row;
      align-self: center;
    }
  }
  .title-container {
    align-self: center;
    padding: 20px;
    margin-top: 40px;
    color: ${({ darkMode }) => (darkMode === "dark" ? grey[100] : "#000")};
    text-align: center;
  }
  .title {
    font-size: 1.2rem;
  }
  .insight-body {
    margin: 0 auto;
    margin-top: 20px;
    min-width: 400px;
    color: ${({ darkMode }) => (darkMode === "dark" ? grey[100] : "#000")};
    min-height: 400px;
    padding: 20px 50px;
    text-align: left;
    font-size: 1rem;
  }
  .user-name {
    font-size: 1.3rem;
  }
  .user-icon {
    margin-right: 10px;
    margin-bottom: -2px;
    font-size: 30px;
  }
  .user-name:hover {
    text-decoration: underline;
    text-decoration-color: ${({ darkMode }) =>
      darkMode === "dark" ? yellow[700] : "#000"};
    cursor: pointer;
  }
  .edit {
    margin-right: 10px;
  }
  hr {
    margin-top: 20px;
  }

  @media screen and (min-width: 600px) {
    .title {
      font-size: 1.5rem;
    }
    .insight-body {
      font-size: 1.2rem;
    }
    @media screen and (min-width: 1280px) {
      .title {
        font-size: 2rem;
      }
      .insight-body {
        font-size: 1.3rem;
      }
    }
  }
`;
export default function InsightDetail({ getOneInsight, handleDelete }) {
  const [insight, setInsight] = useState(null);
  const [currentUser] = useContext(CurrentUserContext);
  const [darkMode] = useContext(DarkModeContext);
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const getInsight = await getOneInsight(id);
      setInsight(getInsight);
      setLoaded(true);
    };
    getData();
  }, [getOneInsight, id]);

  if (!loaded) {
    return (
      <Wrapper darkMode={darkMode}>
        <div className="content-container">
          <LinearProgress style={{ margin: "20% auto", width: "50vw" }} />
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper darkMode={darkMode}>
      <div className="content-container">
        <div className="title-container">
          <Typography className="user-name">
            <AccountCircleIcon className="user-icon" />
            {insight.user?.name}
          </Typography>
          <Typography className="title">{insight?.title}</Typography>
          <Typography>
            Created At:&nbsp;
            <Moment format="dddd, MMMM Do yyyy">
              <small>{insight?.created_at}</small>
            </Moment>
          </Typography>
        </div>
        {insight?.user_id === currentUser?.id && (
          <>
            <div className="buttons2">
              <Button
                component={Link}
                to={`/insights/${insight?.id}/edit`}
                className="edit"
                variant="contained"
                color="primary"
              >
                Edit
              </Button>
              <Button
                className="delete"
                variant="contained"
                color="secondary"
                onClick={() => handleDelete(insight.id)}
              >
                Delete
              </Button>
            </div>
          </>
        )}
        <hr />
        <div className="insight-body">
          <p>{insight?.body}</p>
        </div>
        <br />
        <hr />
        <div className="buttons">
          <Button variant="contained" color="secondary" onClick={goBack}>
            Go Back
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
