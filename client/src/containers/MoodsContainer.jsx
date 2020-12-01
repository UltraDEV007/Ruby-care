import React from "react";
import Moods from "../components/MoodComponents/Moods.jsx";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import MoodCreate from "../screens/MoodScreens/MoodCreate";
import MoodEdit from "../screens/MoodScreens/MoodEdit";
import Blah from '../screens/Blah'
import { destroyMood, getAllMoods, postMood, putMood } from "../services/moods";

export default function MoodsContainer() {
  const [moods, setMoods] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchMoods = async () => {
      const moodData = await getAllMoods();
      setMoods(moodData);
    };
    fetchMoods();
  }, []);

  const handleCreate = async (moodData) => {
    const newMood = await postMood(moodData);
    setMoods((prevState) => [...prevState, newMood]);
    history.push("/home");
  };

  const handleUpdate = async (id, moodData) => {
    const updatedMood = await putMood(id, moodData);
    setMoods((prevState) =>
      prevState.map((mood) => {
        return mood.id === Number(id) ? updatedMood : mood;
      })
    );
    history.push("/foods");
  };

  const handleDelete = async (id) => {
    await destroyMood(id);
    setMoods((prevState) => prevState.filter((mood) => mood.id !== id));
  };

  return (
      <>
      <Moods moods={moods} handleDelete={handleDelete} />
    <Switch>
      <Route exact path="/moods/new">
        <MoodCreate handleCreate={handleCreate} />
      </Route>
      <Route path="/blah">
        <Blah  />
      </Route>
      <Route path='/moods/:id/edit'>
        <MoodEdit moods={moods} handleUpdate={handleUpdate} />
      </Route>
    </Switch>
      </>
  );
}
