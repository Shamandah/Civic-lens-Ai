import axios from "axios";

const API = axios.create({
    baseURL: "https://civic-lens-ai-1.onrender.com/api/",
});
// Automatically attach JWT token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default api;