import React from "react";
import { useStyles } from "./linearLoadingStyles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Paper from "@material-ui/core/Paper";
function LinearProgressLoading({ themeState }) {
  const classes = useStyles({ themeState });
  return (
    <Paper className={classes.root}>
      <div className={classes.loadingWrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.loadingLogoDiv}>
            <img
              className={classes.logo}
              src="https://i.imgur.com/1QePclv.png"
              alt="logo"
            />
          </div>
          <LinearProgress style={{ width: "50vw" }} />
        </div>
      </div>
    </Paper>
  );
}

export default LinearProgressLoading;
