import React, { useState } from "react";
import "./Foods.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";
import FoodCard from "./FoodCard";
import FoodCreate from "../Dialogs/FoodDialogs/FoodCreate";
import Typography from "@material-ui/core/Typography";

export default function Foods({
  foods,
  updated,
  handleDelete,
  handleCreate,
  loaded,
  setFoods,
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

  const foodsJSX =
    foods.length === 0 ? (
      <div className="log-your-food">
        <Typography> Click the </Typography>&nbsp;
        <AddIcon className="plus-icon-foods" />
        &nbsp;
        <Typography>button to add a food to your diary!</Typography>
      </div>
    ) : (
      foods.map((food) => (
        <FoodCard
          foods={foods}
          key={food.id}
          setFoods={setFoods}
          updated={updated}
          food={food}
          handleUpdate={handleUpdate}
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
      <div className="foods">
        {loaded ? foodsJSX : <>Loading...</>}
        <div className="food-buttons-container">
          <Button
            className="edit-foods"
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
            className="add-food"
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
