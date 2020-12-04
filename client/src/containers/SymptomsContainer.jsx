import React from "react";
import Symptoms from "../components/SymptomComponents/Symptoms.jsx";
import { useState, useEffect, useContext } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import SymptomEdit from "../screens/SymptomScreens/SymptomEdit";
import {
  destroySymptom,
  getAllSymptoms,
  postSymptom,
  putSymptom,
} from "../services/symptoms";
import { CurrentUserContext } from "../components/Context/CurrentUserContext";

export default function SymptomsContainer() {
  const [currentUser] = useContext(CurrentUserContext);
  const [symptoms, setSymptoms] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchSymptoms = async () => {
      const symptomData = await getAllSymptoms();
      setSymptoms(symptomData);
      setLoaded(true);
    };
    fetchSymptoms();
  }, [currentUser]);

  const handleCreate = async (symptomData) => {
    const newSymptom = await postSymptom(symptomData);
    setSymptoms((prevState) => [...prevState, newSymptom]);
  };

  const handleUpdate = async (id, symptomData) => {
    const updatedSymptom = await putSymptom(id, symptomData);
    setSymptoms((prevState) =>
      prevState.map((symptom) => {
        return symptom.id === Number(id) ? updatedSymptom : symptom;
      })
    );
    setUpdated(true);
    history.push("/");
  };

  const handleDelete = async (id) => {
    await destroySymptom(id);
    setSymptoms((prevState) =>
      prevState.filter((symptom) => symptom.id !== id)
    );
  };

  return (
    <>
      <Symptoms
        symptoms={symptoms}
        updated={updated}
        loaded={loaded}
        handleCreate={handleCreate}
        handleDelete={handleDelete}
      />
      <Switch>
        <Route path="/symptoms/:id/edit">
          <SymptomEdit symptoms={symptoms} handleUpdate={handleUpdate} />
        </Route>
      </Switch>
    </>
  );
}
