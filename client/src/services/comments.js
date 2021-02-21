import api from "./apiConfig";

export const getAllComments = async () => {
  const resp = await api.get("insight/comments");
  return resp.data;
};

export const getOneComment = async (insightId, commentId) => {
  const resp = await api.get(`insights/${insightId}/comments/${commentId}`);
  return resp.data;
};

export const postComment = async (commentData, insightId) => {
  const resp = await api.post(`insights/${insightId}/comments`, {
    comment: commentData,
  });
  return resp.data;
};

export const putComment = async (insightId, commentData, commentId) => {
  const resp = await api.put(`insights/${insightId}/comments/${commentId}`, {
    comment: commentData,
  });
  return resp.data;
};

export const destroyComment = async (insightId, commentId) => {
  const resp = await api.delete(`insights/${insightId}/comments/${commentId}`);
  return resp;
};
