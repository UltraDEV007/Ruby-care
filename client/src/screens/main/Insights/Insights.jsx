import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../../layouts/Layout/Layout";
import InsightCard from "../../../components/InsightComponents/InsightCard";
import styled from "styled-components";

const Wrapper = styled.div``;
export default function Insights(props) {
  const INSIGHTS = React.Children.toArray(
    props.insights.map((insight) => (
      <InsightCard
        darkMode={props.darkMode}
        updated={props.updated}
        insight={insight}
        handleDelete={props.handleDelete}
      />
    ))
  );

  return (
    <Layout title="Insights">
      <Wrapper>
        {INSIGHTS}
        <br />
        <Link to="/insights/new">
          <button>Create</button>
        </Link>
      </Wrapper>
    </Layout>
  );
}
