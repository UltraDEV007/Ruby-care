import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./insightCardStyles.js";
import { useStateValue } from "../../context/CurrentUserContext";
import { destroyLike, postLike } from "../../services/likes";
import DeleteInsight from "../Modals/DeleteInsight";
import UnlikedIcon from "@material-ui/icons/FavoriteBorder";
import LikedIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import CareCard from "../../components/Card/CareCard";
import ForumIcon from "@material-ui/icons/Forum";

function InsightCard({
  insight,
  handleDelete,
  handleOpen,
  handleClose,
  openDelete,
  onDelete,
  themeState,
  setLoaded,
}) {
  const [{ currentUser }] = useStateValue();
  const classes = useStyles({ themeState });
  const [allLikes, setAllLikes] = useState(insight.likes);
  const [liked, setLiked] = useState(false);
  const [likeDisabled, setLikeDisabled] = useState(true);
  const { push } = useHistory();

  useEffect(() => {
    const unDisableLikingOnMount = async () => {
      setLikeDisabled(false);
    };
    unDisableLikingOnMount();
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
      setLoaded(false);
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
      setLoaded(false);
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
        onClick={!liked ? handleLike : handleUnlike}
      >
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

  const commentsJSX = (
    <>
      <IconButton onClick={() => push(`/insights/${insight?.id}`)}>
        <ForumIcon />
      </IconButton>
      &nbsp;
      {insight?.comments?.length}
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
        commentsJSX={commentsJSX}
        post={insight}
        description={insight.description}
        openDeleteModal={handleOpen}
        commentStyles={false}
        editIsLink={true}
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
