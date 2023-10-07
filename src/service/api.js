import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the token from wherever you store it (e.g., Redux store, localStorage, etc.)
    const token = localStorage.getItem("token");
    // If the token exists, set it to the Authorization header
    if (token) config.headers["Authorization"] = `Token ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const callApi = ({ url, method, data, headers }) =>
  axiosInstance({
    url,
    method: method ?? "GET",
    data,
    headers,
  }).then(({ data }) => data);
