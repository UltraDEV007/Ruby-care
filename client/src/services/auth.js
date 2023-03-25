import api from "./apiConfig";

export const loginUser = async (loginData) => {
  try {
    const resp = await api?.post("/auth/login", { authentication: loginData });
    localStorage.setItem("authToken", resp?.data?.token);
    api.defaults.headers.common.authorization = `Bearer ${resp?.data?.token}`;
    return resp?.data?.user;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (registerData) => {
  try {
    const resp = await api.post("/users/", { user: registerData });
    localStorage.setItem("authToken", resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    try {
      const resp = await api.get("/auth/verify");
      return resp.data;
    } catch (error) {
      // these lines are to handle the case when heroku is hibernating and the home page is loading because the content hasn't loaded but we don't have a user to associate it with.
      // if the user isn't verified and heroku is hibernating.
      let path = window.location.origin + "/login";
      // and the path isn't login
      if (window.location.origin + "/login" !== path) {
        // send the user to login.
        window.location.href = window.location.origin + "/login";
      }
    }
  }
  return null;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};
