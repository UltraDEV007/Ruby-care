import React from "react";
import Affirmations from "../components/AffirmationComponents/Affirmations.jsx";
import { useState, useEffect, useContext } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
// import AffirmationEdit from "../screens/AffirmationScreens/AffirmationEdit";
import {
  destroyAffirmation,
  getAllAffirmations,
  postAffirmation,
  putAffirmation,
} from "../services/affirmations";
import { CurrentUserContext } from "../Context/CurrentUser/CurrentUserContext";

export default function AffirmationsContainer() {
  const [currentUser] = useContext(CurrentUserContext);
  const [affirmations, setAffirmations] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchAffirmations = async () => {
      const affirmationData = await getAllAffirmations();
      setAffirmations(affirmationData);
      setLoaded(true);
    };
    fetchAffirmations();
  }, [currentUser]);

  const handleCreate = async (affirmationData) => {
    const newAffirmation = await postAffirmation(affirmationData);
    setAffirmations((prevState) => [...prevState, newAffirmation]);
  };

  const handleUpdate = async (id, affirmationData) => {
    const updatedAffirmation = await putAffirmation(id, affirmationData);
    setAffirmations((prevState) =>
      prevState.map((affirmation) => {
        return affirmation.id === Number(id) ? updatedAffirmation : affirmation;
      })
    );
    setUpdated(true);
    history.push("/");
  };

  const handleDelete = async (id) => {
    await destroyAffirmation(id);
    setAffirmations((prevState) =>
      prevState.filter((affirmation) => affirmation.id !== id)
    );
  };

  return (
    <>
      <Affirmations
        affirmations={affirmations}
        updated={updated}
        loaded={loaded}
        handleCreate={handleCreate}
        handleDelete={handleDelete}
      />
      <Switch>
        {/* <Route path="/affirmations/:id/edit">
          <AffirmationEdit
            affirmations={affirmations}
            handleUpdate={handleUpdate}
          />
        </Route> */}
      </Switch>
    </>
  );
}
