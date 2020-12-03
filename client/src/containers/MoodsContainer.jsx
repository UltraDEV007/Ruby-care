import React from "react";
import Moods from "../components/MoodComponents/Moods.jsx";
import { useState, useEffect, useContext } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import MoodEdit from "../screens/MoodScreens/MoodEdit";
import { destroyMood, getAllMoods, postMood, putMood } from "../services/moods";
import { CurrentUserContext } from "../components/Context/CurrentUserContext";

export default function MoodsContainer() {
  const [currentUser] = useContext(CurrentUserContext);
  const [moods, setMoods] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchMoods = async () => {
      const moodData = await getAllMoods();
      setMoods(moodData);
      setLoaded(true);
    };
    fetchMoods();
  }, [currentUser]);

  const handleCreate = async (moodData) => {
    const newMood = await postMood(moodData);
    setMoods((prevState) => [...prevState, newMood]);
  };

  const handleUpdate = async (id, moodData) => {
    const updatedMood = await putMood(id, moodData);
    setMoods((prevState) =>
      prevState.map((mood) => {
        return mood.id === Number(id) ? updatedMood : mood;
      })
    );
    setUpdated(true);
    history.push("/");
  };

  const handleDelete = async (id) => {
    await destroyMood(id);
    setMoods((prevState) => prevState.filter((mood) => mood.id !== id));
  };

  return (
    <>
      <Moods
        moods={moods}
        updated={updated}
        loaded={loaded}
        handleCreate={handleCreate}
        handleDelete={handleDelete}
      />
      <Switch>
        <Route path="/moods/:id/edit">
          <MoodEdit moods={moods} handleUpdate={handleUpdate} />
        </Route>
      </Switch>
    </>
  );
}
