import { axiosInstance } from "./Index";

// el fn deh betesta2bel mn ./sagas/movies ale heya getMoviesRequest call(API)......
export const getMovies = async (payload) => {
  const { searchValue } = payload
  return await axiosInstance.get(`${searchValue}`, { handlerEnabled: true });
};
// handleEnabled is just falg
// ana 7ato 3ashan a3raf 7a3ady 3ala el interceptor wala la2
