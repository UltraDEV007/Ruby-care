import React from "react";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedSharpIcon from "@material-ui/icons/SentimentSatisfiedSharp";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

export default function MoodCard({ mood, openOptions }) {
  return (
    <Card className="mood-card">
      <div className="mood-container">
        <div className="status">
          {mood.status === "great" ? (
            <InsertEmoticonIcon
              style={{
                border: "1px solid black",
                background: "#00FF00",
                fontSize: "36px"
              }}
            />
          ) : mood.status === "poor" ? (
            <SentimentVeryDissatisfiedIcon
              style={{
                border: "1px solid black",
                background: "red",
                fontSize: "36px"
              }}
            />
          ) : mood.status === "okay" ? (
            <SentimentSatisfiedIcon
              style={{
                border: "1px solid black",
                background: "yellow",
                fontSize: "36px"
              }}
            />
          ) : mood.status === "good" ? (
            <SentimentSatisfiedSharpIcon
              style={{
                border: "1px solid black",
                background: "#228B22",
                fontSize: "36px"
              }}
            />
          ) : (
            <></>
          )}
          <p>{mood.status}</p>
        </div>
        <div className="time">
          <p>{mood.created_at}</p>
        </div>
        <div
          className="buttons"
          style={openOptions ? { display: "flex" } : { display: "none" }}
        >
          <Button variant="contained" color="primary" className="edit-button">
          <span role="img" aria-label="edit">🔧</span>
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="delete-button"
          >
            <span role="img" aria-label="delete">🗑️</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}
