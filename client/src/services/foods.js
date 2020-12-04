import api from "./apiConfig";

export const getAllFoods = async () => {
  const resp = await api.get("/foods");
  console.log(resp.data);
  return resp.data;
};

export const getOneFood = async (id) => {
  const resp = await api.get(`/foods/${id}`);
  return resp.data;
};

export const postFood = async (foodData) => {
  const resp = await api.post("/foods", foodData);
  return resp.data;
};

export const putFood = async (id, foodData) => {
  const resp = await api.put(`/foods/${id}`, foodData);
  return resp.data;
};

export const destroyFood = async (id) => {
  const resp = await api.delete(`/foods/${id}`);
  return resp.data;
};
