import axios from "axios";

// Create an axios instance
const api = axios.create({
  baseURL: "https://639aff04db6c.ngrok-free.app", // your API base URL
  timeout: 10000, // optional
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NTgxNzkyMjcsImV4cCI6MTc1ODI2NTYyNywiZGF0YSI6eyJlbWFpbCI6ImFsYWtzYW5kYXJqZXN1c0B5YWhvby5jby5pbiJ9fQ.2Yuy-BWW2bBQW67-37aAyPq0Q6RdYB1XXf-4JWo0Vk8"; // later get from Redux/AsyncStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Optionally transform response here
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized globally (e.g., logout)
      console.log("Unauthorized! Redirect to login.");
    }
    return Promise.reject(error);
  }
);

export default api;
