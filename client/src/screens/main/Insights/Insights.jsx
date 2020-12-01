import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../../layouts/Layout/Layout";
import InsightCard from "../../../components/InsightComponents/InsightCard";
export default function Insights(props) {
  const INSIGHTS = React.Children.toArray(
    props.insights.map((insight) => (
      <InsightCard
        updated={props.updated}
        insight={insight}
        handleDelete={props.handleDelete}
      />
    ))
  );

  return (
    <Layout title="Insights">
      <h3>Insights</h3>
      {INSIGHTS}
      <br />
      <Link to="/insights/new">
        <button>Create</button>
      </Link>
    </Layout>
  );
}
