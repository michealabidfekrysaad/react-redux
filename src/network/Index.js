import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "./Interceptor";
import { baseURL } from "../utils.js/constant";


//   el conetnt-type ale  bab3ato lel request dayman  json
export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    "Authorization" : "none",
  },
});

// bab3at el request 3ashan ahandelo henak fe el fn
axiosInstance.interceptors.request.use((request) => requestHandler(request));

// bahandel el response beta3e
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
