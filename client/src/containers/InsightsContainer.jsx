import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  destroyInsight,
  getAllInsights,
  postInsight,
  putInsight,
  getOneInsight,
} from "../services/insights";
import Insights from "../screens/main/Insights/Insights";
import InsightCreate from "../screens/InsightScreens/InsightCreate/InsightCreate";
import InsightEdit from "../screens/InsightScreens/InsightEdit/InsightEdit";
import InsightDetail from "../screens/InsightScreens/InsightDetail/InsightDetail";

export default function InsightsContainer({ darkMode }) {
  const [insights, setInsights] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const history = useHistory();

  const onDelete = (id) => {
    handleDelete(id);
    setOpenDelete(false);
  };

  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  const fetchInsights = async () => {
    const insightData = await getAllInsights();
    setInsights(insightData);
    setLoaded(true);
  };

  useEffect(() => {
    // refetch insights when loaded is set to false (for creating a new insight and seeing the new insight on 2 tabs open)
    // this is for a more "live", feel, wasn't necessary when only having 1 tab open.
    if (!loaded) {
      fetchInsights();
    }
  }, [loaded]);

  const handleCreate = async (insightData) => {
    const newInsight = await postInsight(insightData);
    setInsights((prevState) => [newInsight, ...prevState]);
    setLoaded(false);
    history.push("/insights");
  };

  const handleUpdate = async (id, insightData) => {
    const updatedInsight = await putInsight(id, insightData);
    setInsights((prevState) =>
      prevState.map((insight) => {
        return insight.id === Number(id) ? updatedInsight : insight;
      })
    );
    setLoaded(false);
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
        <Route path="/insights">
          <Insights
            openDelete={openDelete}
            onDelete={onDelete}
            handleDeleteClose={handleDeleteClose}
            handleDeleteOpen={handleDeleteOpen}
            loaded={loaded}
            darkMode={darkMode}
            updated={updated}
            insights={insights}
            handleDelete={handleDelete}
          />
        </Route>
      </Switch>
    </>
  );
}
