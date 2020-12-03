import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoodsContainer from "../../containers/MoodsContainer";
import AffirmationsContainer from "../../containers/AffirmationsContainer";
import SymptomsContainer from "../../containers/SymptomsContainer";
import Layout from "../../layouts/Layout/Layout";
import { DarkModeContext } from "../../components/Context/DarkModeContext";
import { CurrentUserContext } from "../../components/Context/CurrentUserContext";
import { indigo } from "@material-ui/core/colors";
import { getAllAffirmations } from "../../services/affirmations";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function Home() {
  const [darkMode] = useContext(DarkModeContext);
  const [currentUser] = useContext(CurrentUserContext);
  const [affirmations, setAffirmations] = useState([]);
  const [loadedAffirmation, setLoadedAffirmation] = useState(false);

  useEffect(() => {
    const fetchAffirmations = async () => {
      const affirmationData = await getAllAffirmations();
      setAffirmations(affirmationData);
      setLoadedAffirmation(true);
    };
    fetchAffirmations();
  }, [currentUser]);

  const useStyles = makeStyles((theme) => ({
    root: {
      margin: "0 auto",
      [theme.breakpoints.down("xs")]: {
        maxWidth: "90vw",
      },
      [theme.breakpoints.up("sm")]: {
        maxWidth: "90vw",
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: "900px",
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: "1000px",
      },
      [theme.breakpoints.up("xl")]: {
        maxWidth: "60vw",
      },
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
        {!loadedAffirmation ? (
          <LinearProgress style={{ margin: "200px auto", width: "30vw" }} />
        ) : (
          <>
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
                <Typography className={classes.heading}>
                  {affirmations?.length === 0 ? (
                    <></>
                  ) : (
                    <> {affirmations?.length} </>
                  )}
                  {affirmations?.length === 1 ? (
                    <> Affirmation</>
                  ) : (
                    <> Affirmations</>
                  )}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="content-container">
                  <AffirmationsContainer
                    affirmations={affirmations}
                    loadedAffirmation={loadedAffirmation}
                    setAffirmations={setAffirmations}
                  />
                </div>
              </AccordionDetails>
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
                <div className="content-container">
                  <SymptomsContainer />
                </div>
              </AccordionDetails>
            </Accordion>
          </>
        )}
      </div>
    </Layout>
  );
}
