import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { Link, Route, Switch } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import { DarkModeContext } from "../Context/DarkModeContext";
import { indigo } from "@material-ui/core/colors/";
import { emojiLogic } from "../../utils/emojiLogic";
import MoodEdit from "../Dialogs/MoodDialogs/MoodEdit";
import CircularProgress from "@material-ui/core/CircularProgress";
import MoodDetail from "../Dialogs/MoodDialogs/MoodDetail";

export default function MoodCard({
  mood,
  updated,
  openOptions,
  handleDelete,
  handleUpdate,
  moods,
  setMoods,
}) {
  const [darkMode] = useContext(DarkModeContext);
  const [openEdit, setOpenEdit] = useState(false);
  const [isRefreshed, setIsRefreshed] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  const handleOpen = () => {
    setOpenEdit(true);
  };

  const handleClose = () => {
    setOpenEdit(false);
  };

  const onSave = (formData, id) => {
    handleUpdate(formData, id);
    setIsRefreshed(true);
    setTimeout(async () => {
      setIsRefreshed(false);
      setOpenEdit(false);
    }, 800);
    setMoods(moods);
  };

  const onDelete = (id) => {
    handleDelete(id);
    if (openDetail) {
      setOpenDetail(false);
    }
  };

  return (
    <>
      <Card
        style={
          darkMode === "light"
            ? { boxShadow: "default" }
            : { boxShadow: `0px 0px 4px 1.2px ${indigo[50]}` }
        }
        className="mood-card">
        <div className="mood-container">
          <div className="hover-container" onClick={() => setOpenDetail(true)}>
            <div className="status">
              {!isRefreshed ? emojiLogic(mood.status) : <CircularProgress />}
              <p>{mood.status}</p>
            </div>
            <div className="time">
              {!updated ? (
                <Moment format="MMM/DD/yyyy hh:mm A">{mood.time}</Moment>
              ) : (
                <Moment format="MMM/DD/yyyy hh:mm A">{mood.time}</Moment>
              )}
            </div>
          </div>
          <div
            className="buttons"
            style={openOptions ? { display: "flex" } : { display: "none" }}>
            <Button
              component={Link}
              to={`/moods/${mood.id}/edit`}
              onClick={handleOpen}
              variant="contained"
              color="primary"
              className="edit-button">
              <span role="img" aria-label="edit">
                🔧
              </span>
            </Button>
            &#8199;
            <Button
              variant="contained"
              color="secondary"
              className="delete-button"
              onClick={() => handleDelete(mood.id)}>
              <span role="img" aria-label="delete">
                🗑️
              </span>
            </Button>
          </div>
        </div>
      </Card>
      <>
        {openEdit && (
          <Switch>
            <Route path="/moods/:id/edit">
              <MoodEdit
                handleOpen={handleOpen}
                moods={moods}
                onSave={onSave}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            </Route>
          </Switch>
        )}
        {openDetail && (
          <MoodDetail
            mood={mood}
            openDetail={openDetail}
            onDelete={onDelete}
            setOpenDetail={setOpenDetail}
          />
        )}
      </>
    </>
  );
}
