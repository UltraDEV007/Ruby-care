import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  destroyInsight,
  getAllInsights,
  postInsight,
  putInsight,
  getOneInsight,
} from "../services/insights";
import Insights from "../screens/main/Insights";
import InsightCreate from "../screens/InsightScreens/InsightCreate";
import InsightEdit from "../screens/InsightScreens/InsightEdit";
import InsightDetail from "../screens/InsightScreens/InsightDetail";

export default function InsightsContainer({ darkMode }) {
  const [insights, setInsights] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchInsights = async () => {
      const insightData = await getAllInsights();
      setInsights(insightData);
      setLoaded(true);
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
    setUpdated(true);
    history.push("/insights");
  };

  const handleDelete = async (id) => {
    await destroyInsight(id);
    setInsights((prevState) =>
      prevState.filter((insight) => insight.id !== id)
    );
    history.push("/insights");
  };
  return (
    <>
      <Switch>
        <Route path="/insights/new">
          <InsightCreate handleCreate={handleCreate} />
        </Route>
        <Route path="/insights/:id/edit">
          <InsightEdit insights={insights} handleUpdate={handleUpdate} />
        </Route>
        <Route path="/insights/:id">
          <InsightDetail
            getOneInsight={getOneInsight}
            handleDelete={handleDelete}
          />
        </Route>
        <div>
          <Route path="/insights">
            <Insights
              loaded={loaded}
              darkMode={darkMode}
              updated={updated}
              insights={insights}
              handleDelete={handleDelete}
            />
          </Route>
        </div>
      </Switch>
    </>
  );
}
