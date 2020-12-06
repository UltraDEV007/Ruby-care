import Meds from "../components/MedComponents/Meds.jsx";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
// import MedEdit from "../screens/MedScreens/MedEdit";
import {
  destroyMed,
  postMed,
  putMed,
  getAllMeds,
  getRXGuideMeds,
} from "../services/medications";

export default function MedsContainer() {
  const [updated, setUpdated] = useState(false);
  const [meds, setMeds] = useState([]);
  const [RXGuideMeds, setRXGuideMeds] = useState([]);
  const [loaded, setLoaded] = useState(false);
  // const [fetchRXGMeds, setFetchRXGMeds] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const getAirtableApi = async () => {
      const RXGMeds = await getRXGuideMeds();
      setRXGuideMeds(RXGMeds);
    };
    getAirtableApi();
  }, []);

  useEffect(() => {
    const fetchMeds = async () => {
      const medData = await getAllMeds();
      setMeds(medData);
      setLoaded(true);
    };
    fetchMeds();
  }, []);

  const handleCreate = async (medData) => {
    const newMed = await postMed(medData);
    setMeds((prevState) => [...prevState, newMed]);
  };

  const handleUpdate = async (id, medData) => {
    const updatedMed = await putMed(id, medData);
    setMeds((prevState) =>
      prevState.map((med) => {
        return med.id === Number(id) ? updatedMed : med;
      })
    );
    setUpdated(true);
    history.push("/");
  };

  const handleDelete = async (id) => {
    await destroyMed(id);
    setMeds((prevState) =>
      prevState.filter((affirmation) => affirmation.id !== id)
    );
  };

  return (
    <>
      <Meds
        RXGuideMeds={RXGuideMeds}
        meds={meds}
        setMeds={setMeds}
        updated={updated}
        loaded={loaded}
        handleCreate={handleCreate}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </>
  );
}
