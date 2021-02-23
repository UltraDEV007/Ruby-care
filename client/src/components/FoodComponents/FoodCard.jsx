import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { Link, Route, Switch } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import { ThemeStateContext } from "../Context/ThemeStateContext";
import { indigo } from "@material-ui/core/colors/";
import ratingLogic from "../../utils/ratingLogic";
import CircularProgress from "@material-ui/core/CircularProgress";
import FoodEdit from "../Dialogs/FoodDialogs/FoodEdit";
import FoodDetail from "../Dialogs/FoodDialogs/FoodDetail";
import { foodNameJSX } from "../../utils/foodUtils";

export default function FoodCard({
  foods,
  setFoods,
  handleUpdate,
  food,
  openOptions,
  handleDelete,
}) {
  const [themeState] = useContext(ThemeStateContext);
  const [isRefreshed, setIsRefreshed] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  const onSave = (id, formData) => {
    handleUpdate(id, formData);
    setIsRefreshed(true);
    setTimeout(async () => {
      setIsRefreshed(false);
      setOpenEdit(false);
    }, 800);
    setFoods(foods);
  };

  const onDelete = (id) => {
    handleDelete(id);
    if (openDetail) {
      setOpenDetail(false);
    }
  };

  return (
    <>
      <Card
        style={
          themeState === "light"
            ? { boxShadow: "default" }
            : { boxShadow: `0px 0px 4px 1.2px ${indigo[50]}` }
        }
        className="food-card">
        <div className="food-container">
          <div className="hover-container" onClick={() => setOpenDetail(true)}>
            {!isRefreshed ? foodNameJSX(food) : <CircularProgress />}
            <div className="time">
              <Moment format="MMM/DD/yyyy hh:mm A">
                {food?.time?.toLocaleString()}
              </Moment>
            </div>
            <div className="rating">{ratingLogic(food.rating, "⭐")}</div>
          </div>
          <div
            className="buttons"
            style={openOptions ? { display: "flex" } : { display: "none" }}>
            <Button
              component={Link}
              onClick={() => setOpenEdit(true)}
              to={`/foods/${food.id}/edit`}
              variant="contained"
              color="primary"
              className="edit-button">
              <span role="img" aria-label="edit">
                🔧
              </span>
            </Button>
            &#8199;
            <Button
              variant="contained"
              color="secondary"
              className="delete-button"
              onClick={() => handleDelete(food.id)}>
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
            <FoodEdit foods={foods} onSave={onSave} setOpenEdit={setOpenEdit} />
          </Route>
        </Switch>
      )}
      {openDetail && (
        <FoodDetail
          food={food}
          openDetail={openDetail}
          onDelete={onDelete}
          setOpenDetail={setOpenDetail}
        />
      )}
    </>
  );
}
