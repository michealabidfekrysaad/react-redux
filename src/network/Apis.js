import { axiosInstance } from "./Index";

// el fn deh betesta2bel mn ./sagas/Books ale heya getBooksRequest call(API)......
export const getBooks = async (payload) => {
  const { searchValue } = payload
  return await axiosInstance.get(`/books/v1/volumes?q=${searchValue}`, { handlerEnabled: true });
};
// handleEnabled is just falg
// ana 7ato 3ashan a3raf 7a3ady 3ala el interceptor wala la2
