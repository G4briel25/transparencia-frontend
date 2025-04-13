import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api-gerencia.onrender.com",
    headers: {
        "Content-type": "application/json"
    }
});

export default axiosInstance;