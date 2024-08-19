import axios from "axios";
import conf from "../config";

export default axios.create({
  baseURL: conf.backendUrl,
});

export const axiosPrivate = axios.create({
  baseURL: conf.backendUrl,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
