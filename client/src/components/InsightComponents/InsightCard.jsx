import { useStateValue } from "../Context/CurrentUserContext";
import DeleteInsight from "../Modals/DeleteInsight";
import { useStyles } from "./insightCardStyles.js";
import UnlikedIcon from "@material-ui/icons/FavoriteBorder";
import LikedIcon from "@material-ui/icons/Favorite";
import React, { useState, useEffect } from "react";
import { destroyLike, postLike } from "../../services/likes";
import IconButton from "@material-ui/core/IconButton";
import CareCard from "../../components/Card/CareCard";

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
      setAllLikes(insight.likes);
      setLikeDisabled(false);
    };
    fetchLikes();
  }, [insight?.likes]);

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
      setLikeDisabled(true);
      const newLike = await postLike({
        user_id: currentUser.id,
        insight_id: insight.id,
      });
      setAllLikes((prevState) => [...prevState, newLike]);
      setLikeDisabled(false);
    }
  };

  const handleUnlike = async () => {
    if (!likeDisabled) {
      setLiked(false);
      setLikeDisabled(true);
      const likeToDelete = allLikes?.find(
        (like) =>
          like?.insight_id === insight?.id && currentUser?.id === like?.user_id
      );
      await destroyLike(likeToDelete.id);
      setAllLikes((prevState) =>
        prevState.filter((like) => like.id !== likeToDelete?.id)
      );
    }
    setLikeDisabled(false);
  };

  let likePointerEvents = likeDisabled
    ? { pointerEvents: "none" }
    : { pointerEvents: "inherit" };

  const likesJSX = (
    <>
      <IconButton
        style={likePointerEvents}
        onClick={!liked ? handleLike : handleUnlike}>
        {!liked ? (
          <UnlikedIcon className={classes.unLikedInsight} />
        ) : (
          <LikedIcon className={classes.likedInsight} />
        )}
      </IconButton>
      &nbsp;
      {allLikes?.length}
    </>
  );

  return (
    <>
      <CareCard
        postPath={`insights/${insight?.id}`}
        editPath={`insights/${insight?.id}/edit`}
        user={insight?.user}
        title={insight?.title}
        likesJSX={likesJSX}
        post={insight}
        description={insight.description}
        openDeleteModal={handleOpen}
        commentStyles={false}
      />

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
