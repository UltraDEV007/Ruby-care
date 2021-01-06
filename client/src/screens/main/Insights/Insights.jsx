import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../layouts/Layout/Layout";
import InsightCard from "../../../components/InsightComponents/InsightCard";
import { DarkModeContext } from "../../../components/Context/DarkModeContext";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Search from "../../../components/Search/Search";
import ScrollToTopOnMount from "../../../components/Helpers/ScrollToTopOnMount";
import Wrapper from "./styledInsights.js";

export default function Insights(props) {
  const [darkMode] = useContext(DarkModeContext);
  const [openDelete, setOpenDelete] = useState(false);

  const onDelete = (id) => {
    props.handleDelete(id);
    setOpenDelete(false);
  };

  const handleDeleteOpen = (id) => {
    setOpenDelete(id);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  const [search, setSearch] = useState("");

  const getInsights = () =>
    props.insights?.filter(
      (insight) =>
        insight?.title?.toLowerCase().includes(`${search}`.toLowerCase()) ||
        insight?.user?.name?.toLowerCase().includes(`${search}`.toLowerCase())
    );

  const queriedInsights = getInsights().map((insight) => (
    <InsightCard
      key={insight.id}
      darkMode={darkMode}
      updated={props.updated}
      insights={props.insights}
      insight={insight}
      handleOpen={handleDeleteOpen}
      handleClose={handleDeleteClose}
      onDelete={onDelete}
      openDelete={openDelete}
      handleDelete={props.handleDelete}
    />
  ));

  return (
    <Layout title="Insights">
      <Wrapper darkMode={darkMode}>
        <ScrollToTopOnMount />
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
          <Search setSearch={setSearch} />
          {!props.loaded && (
            <LinearProgress style={{ margin: "50px auto", width: "30vw" }} />
          )}
          {queriedInsights}
        </div>
      </Wrapper>
    </Layout>
  );
}
