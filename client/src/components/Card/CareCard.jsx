import { useContext } from "react";
import Card from "@material-ui/core/Card";
import { useStateValue } from "../Context/CurrentUserContext";
import { DarkModeContext } from "../Context/DarkModeContext";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import { useStyles } from "./careCardStyles";

export default function CareCard({
  postPath,
  editPath,
  post,
  title,
  user,
  openDeleteModal,
  likesJSX,
}) {
  const [darkMode] = useContext(DarkModeContext);
  const classes = useStyles({ darkMode });
  const [{ currentUser }] = useStateValue();

  return (
    <>
      <Card className={classes.root}>
        <Link className={classes.link} to={postPath}>
          <Typography className={classes.title}>{title}</Typography>
        </Link>
        <div className={classes.userContainer}>
          <Link className={classes.link} to={`/users/${user?.id}`}>
            {user.image ? (
              <img
                src={user?.image}
                className={classes?.userImage}
                alt={user.name}
              />
            ) : (
              <AccountCircleIcon className={classes.userIcon} />
            )}
            <Typography className={classes.userName}>
              {user?.name ? user?.name : <>Anonymous</>}
            </Typography>
          </Link>
        </div>
        <div>
          <Typography className={classes.date}>
            Created at:&nbsp;
            <Moment format="MMM-DD-yyyy hh:mm A">{post?.created_at}</Moment>
          </Typography>
        </div>
        <div>
          <Typography>{post?.description}</Typography>
        </div>
        <br />

        {likesJSX && <div className={classes.likeContainer}>{likesJSX}</div>}

        {post?.user.id === currentUser?.id && (
          <>
            <div className={classes.buttons}>
              <Link to={editPath}>
                <Button variant="contained" color="primary">
                  Edit
                </Button>
              </Link>
              <Button
                className={classes.delete}
                variant="contained"
                color="secondary"
                onClick={() => openDeleteModal(post.id)}>
                Delete
              </Button>
            </div>
          </>
        )}
      </Card>
    </>
  );
}
