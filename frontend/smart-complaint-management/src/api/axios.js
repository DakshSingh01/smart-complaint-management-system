import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
});

API.interceptors.request.use((req) => {
  try {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const parsed = JSON.parse(userInfo);
      if (parsed.token) {
        req.headers.Authorization = `Bearer ${parsed.token}`;
      }
    }
  } catch (e) {
    console.error("Token error", e);
  }
  return req;
});

export default API;