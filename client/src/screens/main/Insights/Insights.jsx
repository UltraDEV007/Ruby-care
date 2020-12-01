import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import { CurrentUserContext } from "../../../CurrentUser/CurrentUserContext";
import Layout from "../../../layouts/Layout/Layout";
export default function Insights(props) {
  const [currentUser] = useContext(CurrentUserContext);

  return (
    <Layout title="Insights">
      <h3>Insights</h3>
      {props.insights.map((insight) => (
        <React.Fragment key={insight.id}>
          <Link to={`/insights/${insight.id}`}>
            <p>{insight.title}</p>
          </Link>
          <p>{insight.description}</p>
          <p>{insight.body}</p>
          <Moment format="MMM-DD-yyyy hh:mm A">{insight.created_at}</Moment>
          {insight.user_id === currentUser?.id && (
            <>
              <div>
                <Link to={`/insights/${insight.id}/edit`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => props.handleDelete(insight.id)}>
                  Delete
                </button>
              </div>
            </>
          )}
        </React.Fragment>
      ))}
      <br />
      <Link to="/insights/new">
        <button>Create</button>
      </Link>
    </Layout>
  );
}
