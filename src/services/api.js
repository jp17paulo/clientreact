import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:44340",
});

export default api;
