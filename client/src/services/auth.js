import api from "./apiConfig";
export const loginUser = async (loginData) => {
  try {
    const resp = await api?.post("/auth/login", { authentication: loginData });
    localStorage.setItem("authToken", resp?.data?.token);
    api.defaults.headers.common.authorization = `Bearer ${resp?.data?.token}`;
    return resp?.data?.user;
  } catch (error) {
    alert("Email and/or password do not match");
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
    // alert(
    //   "Sign-up failed! check these: \n 1. Make sure password is at least 8 characters. \n 2. Make sure email entered is a valid email address. \n 3. Make sure email entered is unique"
    // );
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
      let path = window.location.origin + "/login";
      if (window.location.origin + "/login" !== path) {
        window.location.href = window.location.origin + "/login";
      }
    }
  }
  return null;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};
