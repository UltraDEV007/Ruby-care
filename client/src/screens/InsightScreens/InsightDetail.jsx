import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { CurrentUserContext } from "../../components/Context/CurrentUserContext";
import styled from "styled-components";
import Moment from "react-moment";
import Typography from "@material-ui/core/Typography";

const Wrapper = styled.div`
  min-height: 100vh;
  max-height: 100%;
  .content-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
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
  }
  .title {
    font-size: 1.3rem;
  }
  .insight-body {
    margin: 0 auto;
    margin-top: 20px;
    min-width: 400px;
    min-height: 400px;
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
    @media screen and (min-width: 1280px) {
      .title {
        font-size: 2rem;
      }
    }
  }
`;
export default function InsightDetail({ getOneInsight, handleDelete }) {
  const [insight, setInsight] = useState(null);
  const [currentUser] = useContext(CurrentUserContext);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const getInsight = await getOneInsight(id);
      setInsight(getInsight);
    };
    getData();
  }, [getOneInsight, id]);

  return (
    <Wrapper>
      <div className="content-container">
        <div className="title-container">
          <Typography className="title">{insight?.title}</Typography>
          <Moment format="MMMM-DD-yyyy">
            <small>{insight?.created_at}</small>
          </Moment>
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
          <Button
            variant="contained"
            color="secondary"
            to="/insights"
            component={Link}
          >
            Go Back
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
