import React, { useContext } from "react";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import { DarkModeContext } from "../../Context/DarkModeContext";
function PoorEmoji() {
  const [darkMode] = useContext(DarkModeContext);

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
