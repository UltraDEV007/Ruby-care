import api from "./apiConfig";
import axios from "axios";

const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/prescriptions`;

export const getRXGuideMeds = async () => {
  try {
    const response = await axios.get(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    const meds = response.data.records;
    console.log(meds);
    return meds;
  } catch (error) {
    throw error;
  }
};

export const getAllMeds = async () => {
  try {
    const resp = await api.get("/medications");
    return resp?.data;
  } catch (error) {
    throw error;
  }
};

export const getOneMed = async (id) => {
  const resp = await api.get(`/medications/${id}`);
  return resp.data;
};

export const postMed = async (medData) => {
  const resp = await api.post("/medications", { medication: medData });
  return resp.data;
};

export const putMed = async (id, medData) => {
  const resp = await api.put(`/medications/${id}`, {
    medication: medData,
  });
  return resp.data;
};

export const destroyMed = async (id) => {
  const resp = await api.delete(`/medications/${id}`);
  return resp;
};
