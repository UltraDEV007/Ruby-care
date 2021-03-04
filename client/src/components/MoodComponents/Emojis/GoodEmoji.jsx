import React, { useContext } from "react";
import SentimentSatisfiedSharpIcon from "@material-ui/icons/SentimentSatisfiedSharp";
import { ThemeStateContext } from "../../../context/ThemeStateContext";

function GoodEmoji() {
  const [themeState] = useContext(ThemeStateContext);

  return (
    <>
      <SentimentSatisfiedSharpIcon
        style={
          !themeState
            ? {
                border: "1px solid black",
                background: "#228B22",
                fontSize: "36px",
              }
            : {
                border: "1px solid black",
                background: "#228B22",
                fontSize: "36px",
                color: "black",
              }
        }
      />
    </>
  );
}

export default GoodEmoji;
