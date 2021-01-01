import React, { useContext } from "react";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import { DarkModeContext } from "../../Context/DarkModeContext";

function OkayEmoji() {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <>
      <SentimentSatisfiedIcon
        style={
          !darkMode
            ? {
                border: "1px solid black",
                background: "yellow",
                fontSize: "36px",
              }
            : {
                border: "1px solid black",
                background: "yellow",
                fontSize: "36px",
                color: "black",
              }
        }
      />
    </>
  );
}

export default OkayEmoji;
