import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { CurrentUserContext } from "../../CurrentUser/CurrentUserContext";

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
    <div>
      <>
        <h1>{insight?.title}</h1>
        <small>{insight?.description}</small>
        <p>{insight?.body}</p>
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
              <Link to={`/insights/${insight.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(insight.id)}>Delete</button>
            </div>
          </>
        )}
      </>
    </div>
  );
}
