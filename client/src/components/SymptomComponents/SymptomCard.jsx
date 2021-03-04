import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { Link, Route, Switch } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import { ThemeStateContext } from "../../context/ThemeStateContext";
import { indigo } from "@material-ui/core/colors/";
import SymptomEdit from "../Dialogs/SymptomDialogs/SymptomEdit";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function SymptomCard({
  handleUpdate,
  symptom,
  openOptions,
  handleDelete,
  symptoms,
  setSymptoms,
}) {
  const [themeState] = useContext(ThemeStateContext);
  const [isRefreshed, setIsRefreshed] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const onSave = (id, formData) => {
    handleUpdate(id, formData);
    setIsRefreshed(true);
    setTimeout(async () => {
      setIsRefreshed(false);
      setOpenEdit(false);
    }, 800);
    setSymptoms(symptoms);
  };

  const handleOpen = () => {
    setOpenEdit(true);
  };

  const handleClose = () => {
    setOpenEdit(false);
  };

  return (
    <>
      {!isRefreshed ? (
        <Card
          style={
            themeState === "light"
              ? { boxShadow: "default" }
              : { boxShadow: `0px 0px 4px 1.2px ${indigo[50]}` }
          }
          className="symptom-card">
          <div className="symptom-container">
            {symptom.name}
            <div className="time">
              <Moment format="MMM/DD/yyyy hh:mm A">
                {symptom.time?.toLocaleString()}
              </Moment>
            </div>
            <div
              className="buttons"
              style={openOptions ? { display: "flex" } : { display: "none" }}>
              <Button
                component={Link}
                onClick={handleOpen}
                to={`/symptoms/${symptom.id}/edit`}
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
                onClick={() => handleDelete(symptom.id)}>
                <span role="img" aria-label="delete">
                  🗑️
                </span>
              </Button>
            </div>
          </div>
        </Card>
      ) : (
        <div className="affirmation-container">
          <CircularProgress style={{ height: "60px", width: "60px" }} />
        </div>
      )}

      {openEdit && (
        <Switch>
          <Route path="/symptoms/:id/edit">
            <SymptomEdit
              handleOpen={handleOpen}
              symptoms={symptoms}
              onSave={onSave}
              handleClose={handleClose}
            />
          </Route>
        </Switch>
      )}
    </>
  );
}
