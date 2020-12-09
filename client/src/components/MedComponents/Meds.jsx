import React, { useState } from "react";
import "./Meds.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";
import MedCard from "./MedCard";
import MedCreate from "../Dialogs/MedDialogs/MedCreate";
import Typography from "@material-ui/core/Typography";

export default function Meds({
  meds,
  setMeds,
  updated,
  handleDelete,
  handleCreate,
  loaded,
  RXGuideMeds,
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
  const handleOptionsClick = () => {
    setOpenOptions(!openOptions);
  };

  const onSave = (formData) => {
    handleCreate(formData);
    setOpenDialog(false);
  };

  const MEDS = React.Children.toArray(
    meds.length === 0 ? (
      <div className="log-your-med">
        <Typography> Click the </Typography>&nbsp;
        <AddIcon className="plus-icon-meds" />
        &nbsp;
        <Typography>button to add a medication!</Typography>
      </div>
    ) : (
      meds.map((med) => (
        <MedCard
          openOptions={openOptions}
          RXGuideMeds={RXGuideMeds}
          meds={meds}
          setMeds={setMeds}
          updated={updated}
          med={med}
          handleUpdate={handleUpdate}
          openOptions={openOptions}
          handleDelete={handleDelete}
        />
      ))
    )
  );

  return (
    <>
      <div className="meds">
        {loaded ? MEDS : <>Loading...</>}
        <div className="med-buttons-container">
          <Button
            className="edit-meds"
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
            className="add-med"
          >
            <AddIcon className="add-icon" />
          </Button>
          <MedCreate
            RXGuideMeds={RXGuideMeds}
            open={openDialog}
            onSave={onSave}
            handleClose={handleClose}
          />
        </div>
      </div>
    </>
  );
}
