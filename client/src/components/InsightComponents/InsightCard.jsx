import Moment from "react-moment";
import "moment-timezone";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context/CurrentUserContext";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DeleteInsight from "../Modals/DeleteInsight";
import { useStyles } from "./insightCardStyles.js";

function InsightCard({
  insight,
  handleDelete,
  handleOpen,
  handleClose,
  openDelete,
  onDelete,
  darkMode,
}) {
  const [{ currentUser }] = useStateValue();
  const classes = useStyles({ darkMode });

  return (
    <>
      <Card className={classes.root}>
        <Link className={classes.link} to={`/insights/${insight?.id}`}>
          <Typography className={classes.title}>{insight?.title}</Typography>
        </Link>
        <div className={classes.userContainer}>
          <Link className={classes.link} to={`/users/${insight?.user?.id}`}>
            <AccountCircleIcon className={classes.userIcon} />
            <Typography className={classes.userName}>
              {insight?.user?.name ? insight?.user?.name : <>Anonymous</>}
            </Typography>
          </Link>
        </div>
        <>
          <Typography className={classes.date}>
            Created at:&nbsp;
            <Moment format="MMM-DD-yyyy hh:mm A">{insight?.created_at}</Moment>
          </Typography>
        </>
        <Typography>{insight?.description}</Typography>
        {insight?.user_id === currentUser?.id && (
          <>
            <div className={classes.buttons}>
              <Link to={`/insights/${insight.id}/edit`}>
                <Button variant="contained" color="primary">
                  Edit
                </Button>
              </Link>
              <Button
                className={classes.delete}
                variant="contained"
                color="secondary"
                onClick={() => handleOpen(insight.id)}
              >
                Delete
              </Button>
            </div>
          </>
        )}
      </Card>
      <DeleteInsight
        insight={insight}
        openDelete={openDelete === insight.id}
        onDelete={onDelete}
        handleOpen={handleOpen}
        handleDelete={handleDelete}
        handleClose={handleClose}
      />
    </>
  );
}

export default InsightCard;
