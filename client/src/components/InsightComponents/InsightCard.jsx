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
import UnlikedIcon from "@material-ui/icons/FavoriteBorder";
import LikedIcon from "@material-ui/icons/Favorite";
import React, { useState, useEffect } from "react";
import { getAllLikes, destroyLike, postLike } from "../../services/likes";

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
  const [allLikes, setAllLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  const LIKES = allLikes.filter((like) => like.insight_id === insight.id);

  useEffect(() => {
    const fetchLikes = async () => {
      const likeData = await getAllLikes();
      setAllLikes(likeData);
    };
    fetchLikes();
  }, []);

  const handleLike = async () => {
    setLiked(true);
    const newLike = await postLike({
      user_id: currentUser.id,
      insight_id: insight.id,
    });
    setAllLikes((prevState) => [...prevState, newLike]);
  };

  const handleUnlike = async (id) => {
    console.log(id);
    setLiked(false);
    const likeToDelete = LIKES.find(
      (like) =>
        like.insight_id === insight.id && currentUser.id === like.user_id
    );
    await destroyLike(likeToDelete.id);
    setAllLikes((prevState) =>
      prevState.filter((like) => like.id !== likeToDelete.id)
    );
  };

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
        <div>
          <Typography className={classes.date}>
            Created at:&nbsp;
            <Moment format="MMM-DD-yyyy hh:mm A">{insight?.created_at}</Moment>
          </Typography>
        </div>
        <div>
          <Typography>{insight?.description}</Typography>
        </div>
        <div className={classes.likeContainer}>
          {!liked ? (
            <UnlikedIcon
              className={classes.unLikedInsight}
              onClick={handleLike}
            />
          ) : (
            <LikedIcon
              className={classes.likedInsight}
              onClick={handleUnlike}
            />
          )}
          &nbsp;
          {/* {insight?.user?.likes?.length} likes */}
          {LIKES?.length}
        </div>

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
