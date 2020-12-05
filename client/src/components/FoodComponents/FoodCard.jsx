import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import { DarkModeContext } from "../Context/DarkModeContext";
import { indigo } from "@material-ui/core/colors/";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import ratingLogic from "../../utils/ratingLogic";
// import foodregex from utils
// import foodmap from utils

export default function FoodCard({ food, openOptions, handleDelete }) {
  const [darkMode] = useContext(DarkModeContext);

  const foodRegex = /avocado|chicken|hamburger|burger|(^cheese$)|pizza|cheeseburger|steak|meat|milk/;
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
    <Card
      style={
        darkMode === "light"
          ? { boxShadow: "default" }
          : { boxShadow: `0px 0px 4px 1.2px ${indigo[50]}` }
      }
      className="food-card"
    >
      <div className="food-container">
        {foodNameJSX()}
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
  );
}
