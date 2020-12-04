import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout/Layout";
import InsightCard from "../../components/InsightComponents/InsightCard";
import { DarkModeContext } from "../../components/Context/DarkModeContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { yellow, blue } from "@material-ui/core/colors";
import Search from "../../components/Helpers/Search";

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
  @media screen and (min-width: 1929px) {
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
  }
`;
export default function Insights(props) {
  const [darkMode] = useContext(DarkModeContext);
  const [openDelete, setOpenDelete] = useState(false);

  const onDelete = (id) => {
    props.handleDelete(id);
    setOpenDelete(false);
  };

  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  const INSIGHTS = React.Children.toArray(
    props.insights.map((insight) => (
      <InsightCard
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
    ))
  );

  const [search, setSearch] = useState(false);
  const filteredInsights = props.insights?.filter(
    (insight) =>
      insight?.title?.toLowerCase().includes(`${search}`.toLowerCase()) ||
      insight?.user?.name?.toLowerCase().includes(`${search}`.toLowerCase())
  );

  const insightsJSX = React.Children.toArray(
    filteredInsights.map((insight) => (
      <InsightCard
        onClick={() => setSearch(INSIGHTS)}
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
          <Search setSearch={setSearch} />
          {!props.loaded ? <CircularProgress /> : <></>}
          {search ? insightsJSX : INSIGHTS}
        </div>
      </Wrapper>
    </Layout>
  );
}
