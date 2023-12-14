import axios from "axios";
import { API_URL } from "../config";

export const instance = axios.create({
   baseURL: API_URL,
   // timeout: 8000,
});

instance.interceptors.request.use(
   (config) => {
     const token = localStorage.getItem('token');
     if (token) {
       config.headers.Authorization = `Bearer ${token}`;
     }
     return config;
   },
   (error) => Promise.reject(error)
 );