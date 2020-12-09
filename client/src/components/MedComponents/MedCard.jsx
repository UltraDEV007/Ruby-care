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
import MedDetail from "../Dialogs/MedDialogs/MedDetail";
import Typography from "@material-ui/core/Typography";
import { compareDateWithCurrentTime } from "../../utils/compareDateWithCurrentTime";
import { CurrentUserContext } from "../../components/Context/CurrentUserContext";

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
  const [openDetail, setOpenDetail] = useState(false);
  const [taken, setTaken] = useState(false);
  const [currentUser] = useContext(CurrentUserContext);

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

  const handleDetailClose = () => {
    setOpenDetail(false);
  };

  const handleDetailOpen = () => {
    setOpenDetail(true);
  };

  const handleClose = () => {
    setOpenEdit(false);
  };

  const onDelete = (id) => {
    handleDelete(id);
    setOpenDetail(false);
  };

  const onTake = (id) => {
    handleUpdate(id);
    setTaken(true);
    setOpenDetail(false);
  };

  const onNotTake = () => {
    setTaken(false);
  };

  return (
    <>
      <Card
        style={
          darkMode === "light"
            ? { boxShadow: "default", cursor: "pointer" }
            : {
                boxShadow: `0px 0px 4px 1.2px ${indigo[50]} `,
                cursor: "pointer",
              }
        }
        className="med-card"
      >
        <div className="med-container">
          <Typography
            style={{ fontFamily: "Montserrat", fontSize: "1.1rem" }}
            onClick={handleDetailOpen}
          >
            {med.name}
          </Typography>
          {!edited ? (
            <div style={{ padding: "20px" }}>
              <img
                onClick={handleDetailOpen}
                src={med.image}
                style={{
                  width: "100px",
                  height: "50px",
                  maxWidth: "100px",
                  maxHeight: "50px",
                }}
                alt={med.name}
              />
            </div>
          ) : (
            <div className="med-container">
              <CircularProgress style={{ height: "80px", width: "80px" }} />
            </div>
          )}
          {
            !taken && compareDateWithCurrentTime(med.time) < 0 ? (
              <div onClick={handleDetailOpen} className="time">
                <Typography>
                  You have to take {med?.name} at <br />
                  <Moment format="MMM/DD/yyyy hh:mm A">{med?.time}</Moment>
                </Typography>
              </div>
            ) : !taken && compareDateWithCurrentTime(med.time) === 1 ? (
              <div onClick={handleDetailOpen} className="time">
                <Typography>
                  You were supposed to take {med?.name} at <br />
                  <Moment format="MMM/DD/yyyy hh:mm A">{med?.time}</Moment>
                </Typography>
              </div>
            ) : (
              <div onClick={handleDetailOpen} className="time">
                <Typography>
                  {currentUser.name} took {med?.name} at <br />
                  <Moment format="MMM/DD/yyyy hh:mm A">{med?.time}</Moment>
                </Typography>
              </div>
            )

            // !openOptions && (
            //   <Button
            //     variant="contained"
            //     color="secondary"
            //     className="delete-button"
            //     onClick={() => handleDelete(med.id)}
            //   >
            //     <span role="img" aria-label="delete">
            //       🗑️
            //     </span>
            //   </Button>
            // )
          }
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
            &#8199;
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
        {openDetail && (
          <MedDetail
            med={med}
            openDetail={openDetail}
            onDelete={onDelete}
            onTake={onTake}
            taken={taken}
            onNotTake={onNotTake}
            handleDetailClose={handleDetailClose}
          />
        )}
      </Card>

      {openEdit && (
        <Switch>
          <Route path="/medications/:id/edit">
            <MedEdit
              taken={taken}
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
