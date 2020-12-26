import React, { useState } from "react";
import "./Affirmations.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";
import AffirmationLetter from "./AffirmationLetter";
import AffirmationCreate from "../Dialogs/AffirmationDialogs/AffirmationCreate";
import Typography from "@material-ui/core/Typography";

export default function Affirmations({
  affirmations,
  updated,
  handleDelete,
  handleCreate,
  loaded,
  setAffirmations,
  handleUpdate,
}) {
  const [openOptions, setOpenOptions] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  const onSave = (formData) => {
    handleCreate(formData);
    setOpenDialog(false);
  };

  const handleOptionsClick = () => {
    setOpenOptions(!openOptions);
  };

  const AFFIRMATIONS =
    affirmations?.length === 0 ? (
      <div className="log-your-affirmation">
        <Typography> Click the </Typography>&nbsp;
        <AddIcon className="plus-icon-affirmations" />
        &nbsp;
        <Typography>button to write yourself an affirmation!</Typography>
      </div>
    ) : (
      affirmations.map((affirmation) => (
        <AffirmationLetter
          key={affirmation.id}
          updated={updated}
          setAffirmations={setAffirmations}
          handleUpdate={handleUpdate}
          affirmation={affirmation}
          openOptions={openOptions}
          handleDelete={handleDelete}
          affirmations={affirmations}
        />
      ))
    );

  return (
    <>
      <div className="affirmations">
        {loaded ? AFFIRMATIONS : <>Loading...</>}
        <div className="mood-buttons-container">
          <Button
            className="edit-affirmations"
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
