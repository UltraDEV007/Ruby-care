import api from "./apiConfig";

export const getAllLikes = async () => {
  const resp = await api.get("/likes");
  return resp.data;
};

export const getOneLike = async (id) => {
  const resp = await api.get(`/likes/${id}`);
  return resp.data;
};

export const postLike = async (likeData) => {
  const resp = await api.post("/likes", likeData);
  return resp.data;
};

export const destroyLike = async (id) => {
  const resp = await api.delete(`/likes/${id}`);
  return resp;
};
