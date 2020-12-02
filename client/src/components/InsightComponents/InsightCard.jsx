import { useContext } from "react";
import Moment from "react-moment";
import "moment-timezone";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../Context/CurrentUser/CurrentUserContext";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/styles";
import { yellow } from "@material-ui/core/colors";

function InsightCard({ updated, insight, handleDelete, darkMode }) {
  const useStyles = makeStyles({
    root: {
      margin: "30px auto",
      minWidth: "350px",
      width: "350px",
      minHeight: "150px",
    },
    link: {
      textDecoration: "none",
    },
    title: {
      color: darkMode === "dark" ? yellow[700] : "#000",
      fontWeight: "bold",
      fontSize: "24px",
    },
  });
  const [currentUser] = useContext(CurrentUserContext);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link className={classes.link} to={`/insights/${insight?.id}`}>
        <Typography className={classes.title}>{insight?.title}</Typography>
        <Typography className={classes.title}>{insight?.user?.name}</Typography>
      </Link>
      {!updated ? (
        <>
          <Typography>
            Created at:&nbsp;
            <Moment format="MMM-DD-yyyy hh:mm A">{insight?.created_at}</Moment>
          </Typography>
        </>
      ) : (
        <>
          <Typography>
            Updated at:&nbsp;
            <Moment format="MMM-DD-yyyy hh:mm A">{insight?.updated_at}</Moment>
          </Typography>
        </>
      )}
      <Typography>{insight?.description}</Typography>
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
    </Card>
  );
}

export default InsightCard;
