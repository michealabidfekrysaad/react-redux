import store from "../store";
import { loader } from "../store/Loader/LoaderAction";

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

// let token = localStorage.getItem("token");

// ana hena bab3at ay 7aga m3 el request ex:language w barodo tany
export const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    // do code
    // return request
    // put loader
    store.dispatch(loader(true));
    request.headers["Authorization"] = "add-custom-header-to-request";
  }
  return request;
};

export const successHandler = (response) => {
  if (isHandlerEnabled(response)) {
    response.headers["Authorization"] = "update-the-custom-header-with-response";
    store.dispatch(loader(false));
    // response.headers["loading"] = false;
    // do code
    // remove loader
  }
  return response;
};

export const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    error.config.headers["failed"] = "network-error-try-again"
    store.dispatch(loader(false));
    //   do code
    // remove loader
  }
  return Promise.reject({ ...error });
};

// at min 5.16 in second video
