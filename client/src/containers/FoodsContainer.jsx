import React from "react";
import Foods from "../components/FoodComponents/Foods.jsx";
import { useState, useEffect, useContext } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import FoodEdit from "../screens/FoodScreens/FoodEdit";
import { destroyFood, getAllFoods, postFood, putFood } from "../services/foods";
import { CurrentUserContext } from "../components/Context/CurrentUserContext";

export default function FoodsContainer() {
  const [currentUser] = useContext(CurrentUserContext);
  const [foods, setFoods] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchFoods = async () => {
      const foodData = await getAllFoods();
      setFoods(foodData);
      setLoaded(true);
    };
    fetchFoods();
  }, [currentUser]);

  const handleCreate = async (foodData) => {
    const newFood = await postFood(foodData);
    setFoods((prevState) => [...prevState, newFood]);
  };

  const handleUpdate = async (id, foodData) => {
    const updatedFood = await putFood(id, foodData);
    setFoods((prevState) =>
      prevState.map((food) => {
        return food.id === Number(id) ? updatedFood : food;
      })
    );
    setUpdated(true);
    history.push("/");
  };

  const handleDelete = async (id) => {
    await destroyFood(id);
    setFoods((prevState) => prevState.filter((food) => food.id !== id));
  };

  return (
    <>
      <Foods
        foods={foods}
        updated={updated}
        loaded={loaded}
        handleCreate={handleCreate}
        handleDelete={handleDelete}
      />
      <Switch>
        <Route path="/foods/:id/edit">
          <FoodEdit foods={foods} handleUpdate={handleUpdate} />
        </Route>
      </Switch>
    </>
  );
}
