import axios from "axios";
import useAuthStore from "../store/useAuthStore";

const AuthaxiosInstance = axios.create({
  baseURL: 'https://knowledgeshop.runasp.net/api',
  headers: {
    "Accept-Language": "en",
  },
});

AuthaxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization; // لو ما في توكن
    }
    console.log("Sending request with headers:", config.headers); // لمراقبة
    return config;
  },
  (error) => Promise.reject(error)
);
export default AuthaxiosInstance;