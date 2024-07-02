import axios from "axios";
import env from "../utils/env";

export const api = axios.create({
  baseURL: env.VITE_BACKEND_API_URL,
  withCredentials: true, // if turned off auth token won't get stored in cookies and when sending a res to the server, they won't get included in it
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json", //stating to the server that client will accept the res in json
  },
});
