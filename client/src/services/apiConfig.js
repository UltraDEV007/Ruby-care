import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://heroku-care.herokuapp.com/"
    : "http://localhost:3000";

const api = axios.create({
  baseURL: "https://heroku-care.herokuapp.com/",
});

export default api;
