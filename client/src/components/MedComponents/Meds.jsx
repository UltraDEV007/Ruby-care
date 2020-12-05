import React, { useState } from "react";
import "./Moods.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";
import MedCard from "./MedCard";
import MedCreate from "../Dialogs/MedDialogs/MedCreate";
import Typography from "@material-ui/core/Typography";

export default function Meds({
  meds,
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
  const handleOptionsClick = () => {
    setOpenOptions(!openOptions);
  };

  const onSave = (formData) => {
    handleCreate(formData);
    setOpenDialog(false);
  };

  const MEDS = React.Children.toArray(
    meds.length === 0 ? (
      <div className="log-your-mood">
        <Typography> Click the </Typography>&nbsp;
        <AddIcon className="plus-icon-moods" />
        &nbsp;
        <Typography>button to add a medication!</Typography>
      </div>
    ) : (
      meds.map((med) => (
        <MedCard
          updated={updated}
          med={med}
          openOptions={openOptions}
          handleDelete={handleDelete}
        />
      ))
    )
  );

  return (
    <>
      <div className="moods">
        {loaded ? MEDS : <>Loading...</>}
        <div className="mood-buttons-container">
          <Button
            className="edit-moods"
            variant="outlined"
            color="primary"
            onClick={handleOptionsClick}
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
          <MedCreate
            open={openDialog}
            onSave={onSave}
            handleClose={handleClose}
          />
        </div>
      </div>
    </>
  );
}
