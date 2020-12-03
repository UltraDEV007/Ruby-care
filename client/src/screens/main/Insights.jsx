import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout/Layout";
import InsightCard from "../../components/InsightComponents/InsightCard";
import { DarkModeContext } from "../../components/Context/DarkModeContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { yellow, blue } from "@material-ui/core/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 800px;
  max-height: 100%;

  .insights-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .sentence-container {
    margin: 20px auto;
  }
  .sentence {
    font-size: 1.3rem;
    margin: 0 auto;
  }
  a {
    text-decoration: none;
  }
  .span {
    color: ${({ darkMode }) =>
      darkMode === "light" ? blue[500] : yellow[700]};
  }
  @media screen and (min-width: 1930px) {
    .insights-container {
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
    }
  }
  @media screen and (min-width: 600px) {
    .sentence {
      font-size: 1.5rem;
      margin: 0 auto;
    }
  @media screen and (min-width: 1280px) {
    .sentence {
      font-size: 2rem;
      margin: 0 auto;
    }
    .sentence-container {
      margin-bottom: 40px;
    }
  }
`;
export default function Insights(props) {
  const [darkMode] = useContext(DarkModeContext);

  const INSIGHTS = React.Children.toArray(
    props.insights.map((insight) => (
      <Link to={`/insights/${insight?.id}`}>
        <InsightCard
          darkMode={darkMode}
          updated={props.updated}
          insight={insight}
          handleDelete={props.handleDelete}
        />
      </Link>
    ))
  );

  return (
    <Layout title="Insights">
      <Wrapper darkMode={darkMode}>
        <div className="sentence-container">
          <Typography className="sentence">
            Anything on your mind? &nbsp;
            <Link to="/insights/new">
              <span className="span">Share an insight!</span>
            </Link>
          </Typography>
        </div>
        <br />
        <div className="insights-container">
          {props.loaded ? INSIGHTS : <CircularProgress />}
        </div>
      </Wrapper>
    </Layout>
  );
}
