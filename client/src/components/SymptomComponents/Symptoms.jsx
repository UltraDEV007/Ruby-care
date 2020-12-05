import React, { useState } from "react";
import "./Symptoms.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";
import SymptomCard from "./SymptomCard";
import SymptomCreate from "../Dialogs/SymptomDialogs/SymptomCreate";
import Typography from "@material-ui/core/Typography";

export default function Symptoms({
  symptoms,
  updated,
  handleDelete,
  handleCreate,
  loaded,
  handleUpdate,
  setSymptoms,
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

  const SYMPTOMS = React.Children.toArray(
    symptoms.length === 0 ? (
      <div className="log-your-symptom">
        <Typography> Click the </Typography>&nbsp;
        <AddIcon className="plus-icon-symptoms" />
        &nbsp;
        <Typography>button to track your symptoms!</Typography>
      </div>
    ) : (
      symptoms.map((symptom) => (
        <SymptomCard
          symptoms={symptoms}
          setSymptoms={setSymptoms}
          handleUpdate={handleUpdate}
          updated={updated}
          symptom={symptom}
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
      <div className="symptoms">
        {loaded ? SYMPTOMS : <>Loading...</>}
        <div className="symptom-buttons-container">
          <Button
            className="edit-symptoms"
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
            className="add-symptom"
          >
            <AddIcon className="add-icon" />
          </Button>
          <SymptomCreate
            open={openDialog}
            onSave={onSave}
            handleClose={handleClose}
          />
        </div>
      </div>
    </>
  );
}
