import React, { useState } from "react";
import "./Moods.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";
import MoodCard from "./MoodCard";
import MoodCreate from "../Dialogs/MoodCreate";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Moods({
  moods,
  updated,
  handleDelete,
  handleCreate,
  loaded,
}) {
  const [openOptions, setOpenOptions] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleMouseClick = () => {
    setOpenOptions(!openOptions);
  };

  const MOODS = React.Children.toArray(
    moods.map((mood) => (
      <MoodCard
        updated={updated}
        mood={mood}
        openOptions={openOptions}
        handleDelete={handleDelete}
      />
    ))
  );

  const onSave = (formData) => {
    handleCreate(formData);
    setOpenDialog(false);
  };

  return (
    <>
      <div className="moods">
        {loaded ? MOODS : <CircularProgress />}
        <div className="buttons-container1">
          <Button
            className="edit-moods"
            variant="outlined"
            color="primary"
            onClick={handleMouseClick}
          >
            <SettingsSharpIcon className="options-icon" />
          </Button>
          <Button
            onClick={handleClickOpen}
            variant="outlined"
            color="primary"
            className="add-mood"
          >
            <AddIcon className="add-icon" />
          </Button>
          <MoodCreate
            open={openDialog}
            onSave={onSave}
            handleClose={handleClose}
          />
        </div>
      </div>
    </>
  );
}
