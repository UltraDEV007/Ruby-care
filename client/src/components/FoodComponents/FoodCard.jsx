import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { Link, Route, Switch } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import { DarkModeContext } from "../Context/DarkModeContext";
import { indigo } from "@material-ui/core/colors/";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import ratingLogic from "../../utils/ratingLogic";
import CircularProgress from "@material-ui/core/CircularProgress";
import FoodEdit from "../Dialogs/FoodDialogs/FoodEdit";

export default function FoodCard({
  foods,
  setFoods,
  handleUpdate,
  food,
  openOptions,
  handleDelete,
}) {
  const [darkMode] = useContext(DarkModeContext);
  const [edited, setEdited] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const onSave = (formData, id) => {
    handleUpdate(formData, id);
    setEdited(true);
    setTimeout(async () => {
      setEdited(false);
      setOpenEdit(false);
    }, 800);
    setFoods(foods);
  };

  const foodRegex = /avocado|chicken|hamburger|burger|(^cheese$)|pizza|cheeseburger|steak|meat|milk|bacon/;
  const foodMap = {
    avocado: "🥑",
    chicken: "🍗",
    hamburger: "🍔",
    cheeseburger: "🍔",
    cheese: "🧀",
    pizza: "🍕",
    steak: "🥩",
    meat: "🍖",
    milk: "🥛",
    bacon: "🥓",
  };

  const foodNameJSX = () => {
    const result = food.name.toLowerCase().trim().match(foodRegex);
    if (result) {
      return (
        <>
          {foodMap[result[0]]}
          <span role="img" aria-label={food.name}>
            &nbsp;{food.name}
          </span>
        </>
      );
    } else {
      return (
        <>
          <RestaurantIcon />
          &nbsp;{food.name}
        </>
      );
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
        className="food-card"
      >
        <div className="food-container">
          {!edited ? foodNameJSX() : <CircularProgress />}
          <div className="time">
            <Moment format="MMM/DD/yyyy hh:mm A">
              {food.time?.toLocaleString()}
            </Moment>
          </div>
          <div className="rating">{ratingLogic(food.rating, "⭐")}</div>
          <div className="factors">{food.factors}</div>
          <div
            className="buttons"
            style={openOptions ? { display: "flex" } : { display: "none" }}
          >
            <Button
              component={Link}
              onClick={() => setOpenEdit(true)}
              to={`/foods/${food.id}/edit`}
              variant="contained"
              color="primary"
              className="edit-button"
            >
              <span role="img" aria-label="edit">
                🔧
              </span>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="delete-button"
              onClick={() => handleDelete(food.id)}
            >
              <span role="img" aria-label="delete">
                🗑️
              </span>
            </Button>
          </div>
        </div>
      </Card>
      {openEdit && (
        <Switch>
          <Route path="/foods/:id/edit">
            <FoodEdit
              foods={foods}
              onSave={onSave}
              handleUpdate={handleUpdate}
              setOpenEdit={setOpenEdit}
            />
          </Route>
        </Switch>
      )}
    </>
  );
}
