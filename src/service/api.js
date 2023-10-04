import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (request) => {
    // console.log('Starting Request', JSON.stringify(request, null, 2));
    return request;
  },
  (error) => {
    console.error("Request Error:", error);

    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log('Response:', JSON.stringify(response, null, 2));
    return response;
  },
  (error) => {
    console.error("Response Error:", error);
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
