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
  const [likeDisabled, setLikeDisabled] = useState(true);

  useEffect(() => {
    const fetchLikes = async () => {
      const likeData = await getAllLikes();
      setAllLikes(likeData?.filter((like) => like?.insight_id === insight?.id));
      setLikeDisabled(false);
    };
    fetchLikes();
  }, [insight?.id]);

  useEffect(() => {
    const likeFound = allLikes?.find(
      (like) =>
        like?.insight_id === insight?.id && currentUser?.id === like?.user_id
    );
    likeFound ? setLiked(true) : setLiked(false);
  }, [allLikes, currentUser?.id, insight?.id]);

  const handleLike = async () => {
    if (!likeDisabled) {
      setLiked(true);
      const newLike = await postLike({
        user_id: currentUser.id,
        insight_id: insight.id,
      });
      setAllLikes((prevState) => [...prevState, newLike]);
    }
  };

  const handleUnlike = async () => {
    if (!likeDisabled) {
      setLiked(false);
      const likeToDelete = allLikes?.find(
        (like) =>
          like?.insight_id === insight?.id && currentUser?.id === like?.user_id
      );
      await destroyLike(likeToDelete.id);
      setAllLikes((prevState) =>
        prevState.filter((like) => like.id !== likeToDelete?.id)
      );
    }
  };

  return (
    <>
      <Card className={classes.root}>
        <Link className={classes.link} to={`/insights/${insight?.id}`}>
          <Typography className={classes.title}>{insight?.title}</Typography>
        </Link>
        <div className={classes.userContainer}>
          <Link className={classes.link} to={`/users/${insight?.user?.id}`}>
            {insight?.user?.image ? (
              <img src={insight?.user?.image} alt={insight.user.name} />
            ) : (
              <AccountCircleIcon className={classes.userIcon} />
            )}
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
        <br />
        {!likeDisabled && (
          <div className={classes.likeContainer}>
            {!liked ? (
              <UnlikedIcon
                style={
                  likeDisabled
                    ? { pointerEvents: "none" }
                    : { pointerEvents: "inherit" }
                }
                className={classes.unLikedInsight}
                onClick={handleLike}
              />
            ) : (
              <LikedIcon
                style={
                  likeDisabled
                    ? { pointerEvents: "none" }
                    : { pointerEvents: "inherit" }
                }
                className={classes.likedInsight}
                onClick={handleUnlike}
              />
            )}
            &nbsp;
            {allLikes?.length}
          </div>
        )}

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
