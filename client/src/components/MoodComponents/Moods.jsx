import React, { useState } from "react";
import "./Moods.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";
import MoodCard from "./MoodCard";
import MoodCreate from "../Dialogs/MoodDialogs/MoodCreate";
import Typography from "@material-ui/core/Typography";

export default function Moods({
  moods,
  updated,
  handleDelete,
  handleCreate,
  loaded,
  handleUpdate,
  setMoods,
}) {
  const [openOptions, setOpenOptions] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleOptionsClick = () => {
    setOpenOptions(!openOptions);
  };

  const onSave = (formData) => {
    handleCreate(formData);
    setOpenDialog(false);
  };

  const MOODS =
    moods.length === 0 ? (
      <div className="log-your-mood">
        <Typography> Click the </Typography>&nbsp;
        <AddIcon className="plus-icon-moods" />
        &nbsp;
        <Typography>button to log your mood!</Typography>
      </div>
    ) : (
      moods.map((mood) => (
        <MoodCard
          key={mood.id}
          setMoods={setMoods}
          handleUpdate={handleUpdate}
          updated={updated}
          mood={mood}
          moods={moods}
          openOptions={openOptions}
          handleDelete={handleDelete}
        />
      ))
    );

  return (
    <>
      <div className="moods">
        {loaded ? MOODS : <>Loading...</>}
        <div className="mood-buttons-container">
          <Button
            className="edit-moods"
            variant="outlined"
            color="primary"
            onClick={handleOptionsClick}
          >
            <SettingsSharpIcon className="options-icon" />
          </Button>
          &#8195;
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
