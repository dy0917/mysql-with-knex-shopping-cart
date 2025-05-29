import axios from "axios";

export const loginRequest = async ({ emailId, password }) => {
  const result = await axios.post("http://localhost:3001/api/auth/login", {
    emailId,
    password,
  });
  return result.data;
};

export const getLoginedUser = async () => {
  const token = sessionStorage.getItem("accessToken");
  const result = await axios.get("http://localhost:3001/api/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return result.data;
};

export const getLoginedUserRequest = async () => {
  const token = sessionStorage.getItem("accessToken");
  return axios.get("http://localhost:3001/api/auth/me", {
    headers: { Authorization: `Bearer ${token}1` },
  });
};

export const getAccessToken = async () => {
  const token = sessionStorage.getItem("refreshToken");
  const result = await axios.get("http://localhost:3001/api/auth/accessToken", {
    headers: { Authorization: `Bearer ${token}` },
  });
  sessionStorage.setItem("accessToken", result.data.accessToken);
};

export const apiProcess = async (request) => {
  let count = 0;
  const excution = async () => {
    if (count > 1) throw Error("cannot get token");
    try {
      count++;
      const result = await request();
      return result.data;
    } catch (e) {
      if (count < 2) {
        await getAccessToken();
        await excution();
      }
    } finally {
      console.log("count", count);
    }
  };
  return await excution();
};
