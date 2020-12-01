import api from "./apiConfig";

export const getAllInsights = async () => {
  const resp = await api.get("/insights");
  return resp.data;
};

export const getOneInsight = async (id) => {
  const resp = await api.get(`/insights/${id}`);
  return resp.data;
};

export const postInsight = async (insightData) => {
  const resp = await api.post("/insights", { insight: insightData });
  return resp.data;
};

export const putInsight = async (id, insightData) => {
  const resp = await api.put(`/insights/${id}`, { insight: insightData });
  return resp.data;
};

export const destroyInsight = async (id) => {
  const resp = await api.delete(`/insights/${id}`);
  return resp;
};
