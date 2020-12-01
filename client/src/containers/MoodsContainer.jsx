import React from "react";
import Moods from "../components/MoodComponents/Moods.jsx";
import { useState, useEffect, useContext } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import MoodCreate from "../screens/MoodScreens/MoodCreate";
import MoodEdit from "../screens/MoodScreens/MoodEdit";
import Blah from '../screens/Blah'
import { destroyMood, getAllMoods, postMood, putMood } from "../services/moods";
import { CurrentUserContext } from "../CurrentUser/CurrentUserContext"

export default function MoodsContainer() {
  const [currentUser] = useContext(CurrentUserContext);

  const [moods, setMoods] = useState([]);
  const [updated, setUpdated] = useState(false)
  const history = useHistory();

  useEffect(() => {
    const fetchMoods = async () => {
      const moodData = await getAllMoods();
      setMoods(moodData);
    };
    fetchMoods();
  }, [currentUser]);

  const handleCreate = async (moodData) => {
    const newMood = await postMood(moodData);
    setMoods((prevState) => [...prevState, newMood]);
    history.push("/");
  };

  const handleUpdate = async (id, moodData) => {
    const updatedMood = await putMood(id, moodData);
    setMoods((prevState) =>
      prevState.map((mood) => {
        return mood.id === Number(id) ? updatedMood : mood;
      })
      );
      setUpdated(true)
      history.push("/");
  };

  const handleDelete = async (id) => {
    await destroyMood(id);
    setMoods((prevState) => prevState.filter((mood) => mood.id !== id));
  };

  return (
      <>
      <Moods moods={moods} updated={updated} handleDelete={handleDelete} />
    <Switch>
      <Route path="/moods/new" exact component={MoodCreate}>
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
