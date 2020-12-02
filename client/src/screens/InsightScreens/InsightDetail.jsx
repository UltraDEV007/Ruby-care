import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { CurrentUserContext } from "../../Context/CurrentUser/CurrentUserContext";
import styled from "styled-components";
const Wrapper = styled.div`
  .content-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    min-height: 100vh;
    max-height: 100%;
  }
  .insight-body {
    min-width: 400px;
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
        <h1>{insight?.title}</h1>
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
            <div>
              <Link to={`/insights/${insight?.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(insight.id)}>Delete</button>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
}
