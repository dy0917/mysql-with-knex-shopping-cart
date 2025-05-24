import axios from "axios";

export const loginRequest = async ({ emailId, password }) => {
  const result = await axios.post("http://localhost:3001/api/auth/login", {
    emailId,
    password,
  });
  return result.data;
};

export const getLoginedUser = async () => {
  const token = sessionStorage.getItem("token");
  const result = await axios.get("http://localhost:3001/api/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return result.data;
};
