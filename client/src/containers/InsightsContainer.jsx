import Layout from "../layouts/Layout/Layout";
import { makeStyles } from "@material-ui/styles";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  destroyInsight,
  getAllInsights,
  postInsight,
  putInsight,
} from "../services/insights";
import Insights from "../screens/main/Insights/Insights";
import InsightCreate from "../screens/InsightScreens/InsightCreate";
const useStyles = makeStyles({});

export default function Community() {
  const classes = useStyles();
  const [insights, setInsights] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchInsights = async () => {
      const insightData = await getAllInsights();
      setInsights(insightData);
    };
    fetchInsights();
  }, []);

  const handleCreate = async (insightData) => {
    const newInsight = await postInsight(insightData);
    setInsights((prevState) => [...prevState, newInsight]);
    history.push("/insights");
  };

  const handleUpdate = async (id, insightData) => {
    const updatedInsight = await putInsight(id, insightData);
    setInsights((prevState) =>
      prevState.map((insight) => {
        return insight.id === Number(id) ? updatedInsight : insight;
      })
    );
    history.push("/insights");
  };

  const handleDelete = async (id) => {
    await destroyInsight(id);
    setInsights((prevState) =>
      prevState.filter((insight) => insight.id !== id)
    );
  };
  return (
    <>
      <Switch>
        <Route path="/insights/new">
          <InsightCreate handleCreate={handleCreate} />
        </Route>
        <div className={classes.root}>
          <Route path="/insights">
            <Insights insights={insights} handleDelete={handleDelete} />
          </Route>
        </div>
      </Switch>
    </>
  );
}
