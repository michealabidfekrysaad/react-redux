import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "./Interceptor";

export const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes?q=",
  //   el conetnt-type ale  bab3ato lel request dayman  json
  headers: {
    "Content-Type": "application/json",
  },
});

// bab3at el request 3ashan ahandelo henak fe el fn
axiosInstance.interceptors.request.use((request) => requestHandler(request));

// bahandel el response beta3e
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
