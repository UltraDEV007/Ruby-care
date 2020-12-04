import React from "react";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

function PoorEmoji({ darkMode }) {
  return (
    <SentimentVeryDissatisfiedIcon
      style={
        !darkMode
          ? {
              border: "1px solid black",
              background: "red",
              fontSize: "36px",
            }
          : {
              border: "1px solid black",
              background: "red",
              fontSize: "36px",
              color: "black",
            }
      }
    />
  );
}

export default PoorEmoji;
