import axios from "axios";
import { API_URL } from "../config";

export const instance = axios.create({
    baseURL: API_URL,
    // timeout: 8000, // TODO remove commented configuration
});

//Acceso redux obtener token desde redux TODO remove unused comments and or use English
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        console.log("se ejecuta interceptors");
        return config;
    },
    (error) => Promise.reject(error)
);
