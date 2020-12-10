import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { CurrentUserContext } from "../../../components/Context/CurrentUserContext";
import Moment from "react-moment";
import Typography from "@material-ui/core/Typography";
import { DarkModeContext } from "../../../components/Context/DarkModeContext";
import { goBack } from "../../../utils/goBack";
import LinearProgress from "@material-ui/core/LinearProgress";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DeleteInsightFromDetail from "../../../components/Modals/DeleteInsightFromDetail";
import Wrapper from "./styledInsightDetail";

export default function InsightDetail({ getOneInsight, handleDelete }) {
  const [insight, setInsight] = useState(null);
  const [currentUser] = useContext(CurrentUserContext);
  const [darkMode] = useContext(DarkModeContext);
  const [loaded, setLoaded] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const { id } = useParams();

  const onDelete = (id) => {
    handleDelete(id);
    setOpenDelete(false);
  };

  const handleDeleteOpen = (id) => {
    setOpenDelete(id);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
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
    return (
      <Wrapper darkMode={darkMode}>
        <div className="content-container">
          <LinearProgress style={{ margin: "20% auto", width: "50vw" }} />
        </div>
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper darkMode={darkMode}>
        <div className="content-container">
          <div className="title-container">
            <Typography className="title">&nbsp;{insight?.title}</Typography>
            <Link className="link" to={`/users/${insight?.user?.id}`}>
              <Typography className="user-name">
                <AccountCircleIcon className="user-icon" />
                &nbsp;{insight.user?.name}
              </Typography>
            </Link>
            <Typography>
              Created At:&nbsp;
              <Moment format="dddd, MMMM Do yyyy">
                <small>{insight?.created_at}</small>
              </Moment>
            </Typography>
          </div>
          {insight?.user_id === currentUser?.id && (
            <>
              <div className="buttons2">
                <Button
                  component={Link}
                  to={`/insights/${insight?.id}/edit`}
                  className="edit"
                  variant="contained"
                  color="primary"
                >
                  Edit
                </Button>
                <Button
                  className="delete"
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDeleteOpen(insight.id)}
                >
                  Delete
                </Button>
              </div>
            </>
          )}
          <hr />
          <div className="insight-body">
            <p>{insight?.body}</p>
          </div>
          <br />
          <hr />
          <div className="buttons">
            <Button variant="contained" color="secondary" onClick={goBack}>
              Go Back
            </Button>
          </div>
        </div>
      </Wrapper>
      <DeleteInsightFromDetail
        insight={insight}
        openDelete={openDelete === insight.id}
        onDelete={onDelete}
        handleOpen={handleDeleteOpen}
        handleDelete={handleDelete}
        handleClose={handleDeleteClose}
      />
    </>
  );
}
