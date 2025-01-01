import axios from "axios";

export const apiRequest = axios.create({
  baseURL: "https://ecommerce-server-78vu.onrender.com",
  withCredentials: true,
});
