import axios from "axios";

const BASE_SERVER_URL = "http://localhost:8000/api/";

const axiosInstance = axios.create({
    baseURL: BASE_SERVER_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
})

export default axiosInstance