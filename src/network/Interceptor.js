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
    // put loader
    // return request.headers["Authorization"] = `bearer  ${token}`;
  }
  return request;
};

export const successHandler = (response) => {
  if (isHandlerEnabled(response)) {
    // do code
    // remove loader
  }
  return response;
};

export const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    //   do code
    // remove loader
  }
  return Promise.reject({ ...error });
};

// at min 5.16 in second video
