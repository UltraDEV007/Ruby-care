import React, { useContext } from "react";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import { ThemeStateContext } from "../../../context/ThemeStateContext";
function PoorEmoji() {
  const [themeState] = useContext(ThemeStateContext);

  return (
    <SentimentVeryDissatisfiedIcon
      style={
        !themeState
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
