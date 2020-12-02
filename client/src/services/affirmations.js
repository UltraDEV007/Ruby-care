import api from "./apiConfig";

export const getAllAffirmations = async () => {
  const resp = await api.get("/affirmations");
  return resp.data;
};

export const getOneAffirmation = async (id) => {
  const resp = await api.get(`/affirmations/${id}`);
  return resp.data;
};

export const postAffirmation = async (affirmationData) => {
  const resp = await api.post("/affirmations", {
    affirmation: affirmationData,
  });
  return resp.data;
};

export const putAffirmation = async (id, affirmationData) => {
  const resp = await api.put(`/affirmations/${id}`, {
    affirmation: affirmationData,
  });
  return resp.data;
};

export const destroyAffirmation = async (id) => {
  const resp = await api.delete(`/affirmations/${id}`);
  return resp;
};
