import React, { useContext } from "react";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { ThemeStateContext } from "../../../context/ThemeStateContext";
function GreatEmoji() {
  const [themeState] = useContext(ThemeStateContext);

  return (
    <>
      <InsertEmoticonIcon
        style={
          !themeState
            ? {
                border: "1px solid black",
                background: "#00FF00",
                fontSize: "36px",
              }
            : {
                border: "1px solid black",
                color: "black",
                background: "#00FF00",
                fontSize: "36px",
              }
        }
      />
    </>
  );
}

export default GreatEmoji;
