import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import { DarkModeContext } from "../Context/DarkModeContext";
import { indigo } from "@material-ui/core/colors/";

export default function SymptomCard({ symptom, openOptions, handleDelete }) {
  const [darkMode] = useContext(DarkModeContext);
  return (
    <Card
      style={
        darkMode === "light"
          ? { boxShadow: "default" }
          : { boxShadow: `0px 0px 4px 1.2px ${indigo[50]}` }
      }
      className="symptom-card"
    >
      <div className="symptom-container">
        {symptom.name}
        <div className="time">
          <Moment format="MMM/DD/yyyy hh:mm A">
            {symptom.time?.toLocaleString()}
          </Moment>
        </div>
        <div
          className="buttons"
          style={openOptions ? { display: "flex" } : { display: "none" }}
        >
          <Button
            component={Link}
            to={`/symptoms/${symptom.id}/edit`}
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
            onClick={() => handleDelete(symptom.id)}
          >
            <span role="img" aria-label="delete">
              🗑️
            </span>
          </Button>
        </div>
      </div>
    </Card>
  );
}
