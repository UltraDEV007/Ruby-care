import api from "./apiConfig";

export const getAllUsers = async () => {
  try {
    const resp = await api.get("/users");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getOneUser = async (id) => {
  try {
    const resp = await api.get(`/users/${id}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const putUser = async (id, userData) => {
  try {
    const resp = await api.put(`/users/${id}`, { user: userData });
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const destroyUser = async (id) => {
  try {
    const resp = await api.delete(`/users/${id}`);
    return resp;
  } catch (error) {
    throw error;
  }
};
