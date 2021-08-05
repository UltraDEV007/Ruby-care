import axios from "axios";

// const baseUrl =
//   process.env.NODE_ENV === "production"
//     ? "https://heroku-care-api.herokuapp.com/"
//     : "http://localhost:3000";

const baseUrl = "https://heroku-care-api.herokuapp.com/";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
