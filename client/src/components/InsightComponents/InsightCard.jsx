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

  const [likedState, setLikedState] = useState(() => {
    let state = localStorage.getItem("likedState");
    if (state !== null) {
      return state === "true" ? true : false;
    }
    return false;
  });

  const handleLikeChange = () => {
    setLikedState(likedState === true ? false : true);
    if (likedState === "false") {
      setLiked(true);
      localStorage.setItem("likedState", true);
    } else {
      setLiked(false);
      localStorage.setItem("likedState", false);
    }
  };

  const handleLike = async (likeData) => {
    const newLike = await postLike(likeData);
    setAllLikes((prevState) => [...prevState, newLike]);
  };

  const handleUnlike = async (id) => {
    await destroyLike(id);
    setAllLikes((prevState) => prevState.filter((like) => like.id !== id));
  };

  useEffect(() => {
    const fetchLikes = async () => {
      const likeData = await getAllLikes();
      setAllLikes(likeData);
    };
    fetchLikes();
  }, []);

  // const LIKES = React.Children.toArray(
  //   allLikes.map((like) => (
  //   ))
  //   )

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
              // onClick={handleLikeChange}
              // onClick={() => setLiked(true)}
              onClick={handleLike}
            />
          ) : (
            <LikedIcon
              className={classes.likedInsight}
              // onClick={handleLikeChange}
              // onClick={() => setLiked(false)}
              onClick={handleUnlike}
            />
          )}
          &nbsp;
          {insight.user.likes.length} likes
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
