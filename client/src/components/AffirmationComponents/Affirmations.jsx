import React, { useState } from "react";
import "./Affirmations.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";
import AffirmationCard from "./AffirmationCard";
import AffirmationCreate from "../Dialogs/AffirmationCreate";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

export default function Affirmation({
  affirmations,
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

  const AFFIRMATIONS = React.Children.toArray(
    affirmations.length === 0 ? (
      <div className="log-your-mood">
        <Typography> Click the </Typography>&nbsp;
        <AddIcon className="plus-icon-moods" />
        &nbsp;
        <Typography>button to write yourself an affirmation!</Typography>
      </div>
    ) : (
      affirmations.map((affirmation) => (
        <AffirmationCard
          updated={updated}
          affirmation={affirmation}
          openOptions={openOptions}
          handleDelete={handleDelete}
        />
      ))
    )
  );

  const onSave = (formData) => {
    handleCreate(formData);
    setOpenDialog(false);
  };

  return (
    <>
      <div className="affirmations">
        {loaded ? AFFIRMATIONS : <CircularProgress />}
        <div className="mood-buttons-container">
          <Button
            className="edit-affirmations"
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
            className="add-affirmation"
          >
            <AddIcon className="add-icon" />
          </Button>
          <AffirmationCreate
            open={openDialog}
            onSave={onSave}
            handleClose={handleClose}
          />
        </div>
      </div>
    </>
  );
}
