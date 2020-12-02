import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoodsContainer from "../../../containers/MoodsContainer";
import Layout from "../../../layouts/Layout/Layout";
import { DarkModeContext } from "../../../Context/DarkMode/DarkModeContext";
import { indigo } from "@material-ui/core/colors";
export default function Home() {
  const [darkMode] = useContext(DarkModeContext);

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "95vw",
      margin: "0 auto",
    },
    heading: {
      fontSize: theme.typography.pxToRem(17),
      fontWeight: theme.typography.fontWeightRegular,
    },
    accordion: {
      boxShadow:
        darkMode === "light" ? "default" : `0px 0px 4px 1.2px ${indigo[50]}`,
      marginTop: "20px",
      marginBottom: "30px",
    },
  }));
  const classes = useStyles();

  return (
    <Layout title="Home">
      <div className={classes.root}>
        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Mood</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="content-container">
              <MoodsContainer />
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Affirmations</Typography>
          </AccordionSummary>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Symptoms</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="content-container"></div>
          </AccordionDetails>
        </Accordion>
      </div>
    </Layout>
  );
}
