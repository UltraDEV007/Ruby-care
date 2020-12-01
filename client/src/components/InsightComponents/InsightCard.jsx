import { useContext } from "react";
import Moment from "react-moment";
import "moment-timezone";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../CurrentUser/CurrentUserContext";

function InsightCard({ updated, insight, handleDelete }) {
  const [currentUser] = useContext(CurrentUserContext);

  return (
    <div>
      <Link to={`/insights/${insight.id}`}>
        <p>{insight.title}</p>
      </Link>
      <p>{insight.description}</p>
      <p>{insight.body}</p>
      {!updated ? (
        <>
          <Typography>
            Created at:&nbsp;
            <Moment format="MMM-DD-yyyy hh:mm A">{insight.created_at}</Moment>
          </Typography>
        </>
      ) : (
        <>
          <Typography>
            Updated at:&nbsp;
            <Moment format="MMM-DD-yyyy hh:mm A">{insight.updated_at}</Moment>
          </Typography>
        </>
      )}
      {insight.user_id === currentUser?.id && (
        <>
          <div>
            <Link to={`/insights/${insight.id}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => handleDelete(insight.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default InsightCard;
