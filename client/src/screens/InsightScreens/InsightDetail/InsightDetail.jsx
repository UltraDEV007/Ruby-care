import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useStateValue } from "../../../components/Context/CurrentUserContext";
import Moment from "react-moment";
import Typography from "@material-ui/core/Typography";
import { DarkModeContext } from "../../../components/Context/DarkModeContext";
import { goBack } from "../../../utils/goBack";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DeleteInsightFromDetail from "../../../components/Modals/DeleteInsightFromDetail";
import Wrapper from "./styledInsightDetail";
import LinearProgressLoading from "../../../components/Loading/LinearProgressLoading";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import CareCard from "../../../components/Card/CareCard";
import DeleteCommentFromDetail from "../../../components/Modals/DeleteCommentFromDetail";
import { destroyComment } from "../../../services/comments";

export default function InsightDetail({ getOneInsight, handleDelete }) {
  const [insight, setInsight] = useState(null);
  const [{ currentUser }] = useStateValue();
  const [darkMode] = useContext(DarkModeContext);
  const [loaded, setLoaded] = useState(false);
  const [openInsightDelete, setOpenInsightDelete] = useState(false);
  const [openCommentDelete, setOpenCommentDelete] = useState(false);

  const { id } = useParams();

  const onInsightDelete = (id) => {
    handleDelete(id);
    if (openInsightDelete) {
      setOpenInsightDelete(false);
    }
  };

  const handleDeleteOpen = (id) => {
    setOpenInsightDelete(id);
  };

  const handleDeleteCommentOpen = (id) => {
    setOpenCommentDelete(id);
  };

  const handleDeleteClose = () => {
    setOpenInsightDelete(false);
  };

  useEffect(() => {
    const getData = async () => {
      const getInsight = await getOneInsight(id);
      setInsight(getInsight);
      setLoaded(true);
    };
    getData();
  }, [getOneInsight, id]);

  if (!loaded) {
    return <LinearProgressLoading darkMode={darkMode} />;
  }

  console.log("test", insight.comments);

  const COMMENTS = insight.comments.map((comment) => {
    const handleCommentDelete = async (insightId, commentId) => {
      await destroyComment(insightId, commentId);
      if (openCommentDelete) {
        setInsight((prevState) =>
          [prevState].filter((insight) => insight.comment.id !== id)
        );
        setOpenCommentDelete(false);
      }
    };

    return (
      <>
        <CareCard
          key={comment?.id}
          user={comment?.user}
          post={comment}
          openDeleteModal={handleDeleteCommentOpen}
          description={comment?.content}
        />

        <DeleteCommentFromDetail
          insight={insight}
          comment={comment}
          openDelete={openCommentDelete === comment.id}
          handleOpen={handleDeleteOpen}
          onDelete={handleCommentDelete}
          handleClose={() => setOpenCommentDelete(false)}
        />
      </>
    );
  });

  return (
    <>
      <Wrapper darkMode={darkMode}>
        <div className="content-container">
          <div className="title-container">
            <div className="arrow-container">
              <IconButton className="arrow-icon" onClick={goBack}>
                <ArrowBackIcon className="arrow-icon" />
              </IconButton>
            </div>
            <Typography className="title">&nbsp;{insight?.title}</Typography>
            <Link className="link" to={`/users/${insight?.user?.id}`}>
              <Typography className="user-name">
                {!insight?.user?.image ? (
                  <AccountCircleIcon className="user-icon" />
                ) : (
                  <img
                    className="user-image"
                    src={insight?.user?.image}
                    alt={insight?.user?.name}
                  />
                )}
                &nbsp;{insight?.user?.name}
              </Typography>
            </Link>
            <Typography>
              Created At:&nbsp;
              <Moment format="dddd, MMMM Do yyyy">
                <small>{insight?.created_at}</small>
              </Moment>
            </Typography>
          </div>
          {insight?.user.id === currentUser?.id && (
            <>
              <div className="buttons">
                <Button
                  component={Link}
                  to={`/insights/${insight?.id}/edit`}
                  className="edit"
                  variant="contained"
                  color="primary">
                  Edit
                </Button>
                <Button
                  className="delete"
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDeleteOpen(insight.id)}>
                  Delete
                </Button>
              </div>
            </>
          )}
          <hr />
          <section className="insight-body">
            <div className="inner-column">
              <p className="insight-text">{insight?.body}</p>
            </div>
          </section>
          <section className="insight-comments">
            <div className="inner-column-comments">
              {insight.comments && COMMENTS}
            </div>
          </section>

          <br />
          <hr className="hr-bottom" />
          <footer>
            <Button variant="contained" color="secondary" onClick={goBack}>
              Go Back
            </Button>
          </footer>
        </div>
      </Wrapper>
      <DeleteInsightFromDetail
        insight={insight}
        openDelete={openInsightDelete === insight.id}
        onDelete={onInsightDelete}
        handleOpen={handleDeleteOpen}
        handleDelete={handleDelete}
        handleClose={handleDeleteClose}
      />
    </>
  );
}
