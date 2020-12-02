import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { CurrentUserContext } from "../../Context/CurrentUser/CurrentUserContext";
import styled from "styled-components";
const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* align-content: center; */
  min-height: 100vh;
  max-height: 100%;
  .content-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
    .buttons2 {
      margin-top: -50px;
    }
  }
  .insight-body {
    min-width: 400px;
    min-height: 200px;
  }
  .edit,
  .delete {
    margin: 20px;
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
  }, [id]);

  return (
    <Wrapper>
      <div className="content-container">
        <div className="title-container">
          <h1>{insight?.title}</h1>
        </div>
        <small>{insight?.description}</small>
        <div className="insight-body">
          <p>{insight?.body}</p>
        </div>
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
        {insight?.user_id === currentUser?.id && (
          <>
            <div className="buttons2">
              <Link to={`/insights/${insight?.id}/edit`}>
                <Button className="edit" variant="contained" color="primary">
                  Edit
                </Button>
              </Link>
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
      </div>
    </Wrapper>
  );
}
