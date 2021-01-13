import { axiosInstance } from "./Index";

// el fn deh betesta2bel mn ./sagas/movies ale heya getMoviesRequest call(API)......
export const getMovies = async (payload) => {
  const { searchValue } = payload
  // console.log(payload.searchValue);
  return await axiosInstance.get(`${searchValue}`, { handlerEnabled: false });
};
// handleEnabled is just falg
// ana 7ato 3ashan a3raf 7a3ady 3ala el interceptor wala la2
