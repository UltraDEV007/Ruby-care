import api from './apiConfig';

export const getAllMoods = async () => {
  const resp = await api.get('/moods');
  return resp.data;
}

export const getOneMood = async (id) => {
  const resp = await api.get(`/moods/${id}`);
  return resp.data;
}

export const postMood = async (moodData) => {
  const resp = await api.post('/moods', { mood: moodData });
  return resp.data;
}

export const putMood = async (id, moodData) => {
  const resp = await api.put(`/moods/${id}`, { mood: moodData });
  return resp.data;
}

export const destroyMood = async (id) => {
  const resp = await api.delete(`/moods/${id}`);
  return resp;
}