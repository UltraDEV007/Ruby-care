import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import { DarkModeContext } from "../../Context/DarkMode/DarkModeContext";
import { indigo } from "@material-ui/core/colors/";

export default function MoodCard({
  affirmation,
  updated,
  openOptions,
  handleDelete,
}) {
  const [darkMode] = useContext(DarkModeContext);
  return (
    <Card
      style={
        darkMode === "light"
          ? { boxShadow: "default" }
          : { boxShadow: `0px 0px 4px 1.2px ${indigo[50]}` }
      }
      className="affirmation-card"
    >
      <div className="affirmation-container">
        <div className="content">
          <p>{affirmation.content}</p>
        </div>
        <div className="time">
          {!updated ? (
            <Moment format="MMM/DD/yyyy hh:mm A">
              {affirmation.created_at}
            </Moment>
          ) : (
            <Moment format="MMM/DD/yyyy hh:mm A">
              {affirmation.updated_at}
            </Moment>
          )}
        </div>
        <div
          className="buttons"
          style={openOptions ? { display: "flex" } : { display: "none" }}
        >
          <Button
            component={Link}
            to={`/affirmations/${affirmation.id}/edit`}
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
            onClick={() => handleDelete(affirmation.id)}
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
