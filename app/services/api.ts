import axios from "axios";
import { API_URL } from "~/common/env";
import { setupInterceptorsTo } from "./interceptors";

const api = axios.create({
  baseURL: API_URL,
});

setupInterceptorsTo(api, "@coterie:token");

export default api;
