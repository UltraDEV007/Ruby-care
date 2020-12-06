import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { Switch, Route, Link } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import { DarkModeContext } from "../Context/DarkModeContext";
import { indigo } from "@material-ui/core/colors/";
import MedEdit from "../Dialogs/MedDialogs/MedEdit";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function MedCard({
  meds,
  setMeds,
  handleUpdate,
  med,
  openOptions,
  handleDelete,
  RXGuideMeds,
}) {
  const [darkMode] = useContext(DarkModeContext);
  const [edited, setEdited] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const onSave = (formData, id) => {
    handleUpdate(formData, id);
    setEdited(true);
    setTimeout(async () => {
      setEdited(false);
      setOpenEdit(false);
    }, 800);
    setMeds(meds);
  };

  const handleOpen = () => {
    setOpenEdit(true);
  };

  const handleClose = () => {
    setOpenEdit(false);
  };

  return (
    <>
      {!edited ? (
        <Card
          style={
            darkMode === "light"
              ? { boxShadow: "default" }
              : { boxShadow: `0px 0px 4px 1.2px ${indigo[50]}` }
          }
          className="med-card"
        >
          <div className="med-container">
            {med.name}
            <div className="time">
              <Moment format="MMM/DD/yyyy hh:mm A">
                {med.time?.toLocaleString()}
              </Moment>
            </div>
            <div
              className="buttons"
              style={openOptions ? { display: "flex" } : { display: "none" }}
            >
              <Button
                component={Link}
                onClick={handleOpen}
                to={`/medications/${med.id}/edit`}
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
                onClick={() => handleDelete(med.id)}
              >
                <span role="img" aria-label="delete">
                  🗑️
                </span>
              </Button>
            </div>
          </div>
        </Card>
      ) : (
        <div className="med-container">
          <CircularProgress style={{ height: "80px", width: "80px" }} />
        </div>
      )}

      {openEdit && (
        <Switch>
          <Route path="/medications/:id/edit">
            <MedEdit
              meds={meds}
              onSave={onSave}
              RXGuideMeds={RXGuideMeds}
              handleOpen={handleOpen}
              handleUpdate={handleUpdate}
              setOpenEdit={setOpenEdit}
              handleClose={handleClose}
            />
          </Route>
        </Switch>
      )}
    </>
  );
}
