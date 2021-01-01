import React, { useContext } from "react";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { DarkModeContext } from "../../Context/DarkModeContext";
function GreatEmoji() {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <>
      <InsertEmoticonIcon
        style={
          !darkMode
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
