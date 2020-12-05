import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import { DarkModeContext } from "../Context/DarkModeContext";
import { indigo } from "@material-ui/core/colors/";
import GreatEmoji from "./Emojis/GreatEmoji";
import PoorEmoji from "./Emojis/PoorEmoji";
import OkayEmoji from "./Emojis/OkayEmoji";
import GoodEmoji from "./Emojis/GoodEmoji";
import { emojiLogic } from "../../utils/emojiLogic";

export default function MoodCard({ mood, updated, openOptions, handleDelete }) {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <Card
      style={
        darkMode === "light"
          ? { boxShadow: "default" }
          : { boxShadow: `0px 0px 4px 1.2px ${indigo[50]}` }
      }
      className="mood-card"
    >
      <div className="mood-container">
        <div className="status">
          {emojiLogic(
            mood.status,
            <PoorEmoji darkMode={darkMode} />,
            <OkayEmoji darkMode={darkMode} />,
            <GoodEmoji darkMode={darkMode} />,
            <GreatEmoji darkMode={darkMode} />
          )}
          <p>{mood.status}</p>
        </div>
        <div className="time">
          {!updated ? (
            <Moment format="MMM/DD/yyyy hh:mm A">{mood.created_at}</Moment>
          ) : (
            <Moment format="MMM/DD/yyyy hh:mm A">{mood.updated_at}</Moment>
          )}
        </div>
        <div
          className="buttons"
          style={openOptions ? { display: "flex" } : { display: "none" }}
        >
          <Button
            component={Link}
            to={`/moods/${mood.id}/edit`}
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
            onClick={() => handleDelete(mood.id)}
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
