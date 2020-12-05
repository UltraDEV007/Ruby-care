import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import { DarkModeContext } from "../Context/DarkModeContext";
import { indigo } from "@material-ui/core/colors/";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import { toTitleCase } from "../../utils/toTitleCase";

export default function FoodCard({ food, openOptions, handleDelete }) {
  const [darkMode] = useContext(DarkModeContext);

  const foodRatingJSX = () => {
    if (food.rating === 1) {
      return <>⭐</>;
    }
    if (food.rating === 2) {
      return <>⭐⭐</>;
    }
    if (food.rating === 3) {
      return <>⭐⭐⭐</>;
    }
    if (food.rating === 4) {
      return <>⭐⭐⭐⭐</>;
    }
    if (food.rating === 5) {
      return <>⭐⭐⭐⭐⭐</>;
    }
  };
  // https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript

  let avocadoReg = /Avocado/;
  let chickenReg = /Chicken/;
  let hamburgerReg = /Hamburger/;
  let cheeseburgerReg = /burger/;
  let cheeseReg = /^Cheese$/;

  const meal = food.name;

  const foodNameJSX = () => {
    if (avocadoReg.test(food.name)) {
      return <>🥑 &nbsp;{meal}</>;
    }
    if (chickenReg.test(food.name)) {
      return <>🍗 &nbsp;{meal}</>;
    }
    if (hamburgerReg.test(food.name)) {
      return <>🍔&nbsp;{meal}</>;
    }
    if (cheeseburgerReg.test(food.name)) {
      return <>🍔&nbsp;{meal}</>;
    }
    if (cheeseReg.test(food.name)) {
      return <>🧀&nbsp;{meal}</>;
    } else {
      return (
        <>
          <RestaurantIcon />
          &nbsp;{meal}
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
        <div className="rating">{foodRatingJSX()}</div>
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
