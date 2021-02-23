import React, { useContext } from "react";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import { ThemeStateContext } from "../../Context/ThemeStateContext";

function OkayEmoji() {
  const [themeState] = useContext(ThemeStateContext);

  return (
    <>
      <SentimentSatisfiedIcon
        style={
          !themeState
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
