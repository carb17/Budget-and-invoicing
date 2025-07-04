import axios from "axios";
import { API_BASE_URL } from "./apiConfig";

const token = localStorage.getItem("token");

export const InstanciaAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
