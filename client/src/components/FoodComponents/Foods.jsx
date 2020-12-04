import React, { useState } from "react";
import "./Foods.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";
import FoodCard from "./FoodCard";
import FoodCreate from "../Dialogs/FoodDialogs/FoodCreate";
import Typography from "@material-ui/core/Typography";

export default function Symptoms({
  foods,
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

  const FOODS = React.Children.toArray(
    foods.length === 0 ? (
      <div className="log-your-symptom">
        <Typography> Click the </Typography>&nbsp;
        <AddIcon className="plus-icon-symptoms" />
        &nbsp;
        <Typography>button to add a food to your diary!</Typography>
      </div>
    ) : (
      foods.map((food) => (
        <FoodCard
          updated={updated}
          food={food}
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
        {loaded ? FOODS : <>Loading...</>}
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
          <FoodCreate
            open={openDialog}
            onSave={onSave}
            handleClose={handleClose}
          />
        </div>
      </div>
    </>
  );
}
