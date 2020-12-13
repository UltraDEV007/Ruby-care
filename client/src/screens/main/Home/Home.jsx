import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStyles } from "./homeStyles.js";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoodsContainer from "../../../containers/MoodsContainer";
import AffirmationsContainer from "../../../containers/AffirmationsContainer";
import SymptomsContainer from "../../../containers/SymptomsContainer";
import MedsContainer from "../../../containers/MedsContainer";
import FoodsContainer from "../../../containers/FoodsContainer";
import Layout from "../../../layouts/Layout/Layout";
import { DarkModeContext } from "../../../components/Context/DarkModeContext";
import { CurrentUserContext } from "../../../components/Context/CurrentUserContext";
import { getAllAffirmations } from "../../../services/affirmations";
import { checkValidity } from "../../../utils/checkValidity";
import NotFound from "../../Error/NotFound";
import ScrollToTopOnMount from "../../../components/Helpers/ScrollToTopOnMount";
import RXGuideLogo from "../../../components/MedComponents/RXGuideLogo";
import LinearProgressLoading from "../../../components/Loading/LinearProgressLoading.jsx";
export default function Home() {
  const [darkMode] = useContext(DarkModeContext);
  const [currentUser] = useContext(CurrentUserContext);
  const [affirmations, setAffirmations] = useState([]);
  const [loadedAffirmation, setLoadedAffirmation] = useState(false);

  let location = useLocation();

  useEffect(() => {
    const fetchAffirmations = async () => {
      const affirmationData = await getAllAffirmations();
      setAffirmations(affirmationData);
      setLoadedAffirmation(true);
    };
    fetchAffirmations();
  }, [currentUser]);

  const classes = useStyles({ darkMode });

  if (!loadedAffirmation) {
    return <LinearProgressLoading darkMode={darkMode} />;
  }

  return checkValidity(location.pathname) ? (
    <Layout title="Home">
      <div className={classes.root}>
        <ScrollToTopOnMount />
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
        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Food diary</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="content-container">
              <FoodsContainer />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <RXGuideLogo />
          </AccordionSummary>
          <AccordionDetails>
            <div className="content-container">
              <MedsContainer />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </Layout>
  ) : (
    <NotFound />
  );
}
