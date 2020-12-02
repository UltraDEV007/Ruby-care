import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../layouts/Layout/Layout";
import InsightCard from "../../../components/InsightComponents/InsightCard";
import { DarkModeContext } from "../../../Context/DarkMode/DarkModeContext";

import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { yellow, blue } from "@material-ui/core/colors";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 800px;
  max-height: 100%;
  .sentence-container {
    margin: 10px auto;
  }
  .sentence {
    font-size: 1.5rem;
    margin: 0 auto;
  }
  a {
    text-decoration: none;
  }
  .span {
    color: ${({ darkMode }) =>
      darkMode === "light" ? blue[400] : yellow[700]};
  }
`;
export default function Insights(props) {
  const [darkMode] = useContext(DarkModeContext);

  const INSIGHTS = React.Children.toArray(
    props.insights.map((insight) => (
      <InsightCard
        darkMode={darkMode}
        updated={props.updated}
        insight={insight}
        handleDelete={props.handleDelete}
      />
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
        {INSIGHTS}
      </Wrapper>
    </Layout>
  );
}
