import api from "./apiConfig";

export const getAllFoods = async () => {
  try {
    const resp = await api.get("/foods");
    return resp?.data;
  } catch (error) {
    throw error;
  }
};

export const getOneFood = async (id) => {
  const resp = await api.get(`/foods/${id}`);
  return resp.data;
};

export const postFood = async (foodData) => {
  const resp = await api.post("/foods", { food: foodData });
  return resp.data;
};

export const putFood = async (id, foodData) => {
  const resp = await api.put(`/foods/${id}`, { food: foodData });
  return resp.data;
};

export const destroyFood = async (id) => {
  const resp = await api.delete(`/foods/${id}`);
  return resp;
};
