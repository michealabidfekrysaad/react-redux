import { DATA_LOADED_AGAIN, GET_USERS_FAILED } from "./action-types";

const initialState = {
  // articles: [],
  remoteMovies: [],
  error: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_LOADED_AGAIN:
      return Object.assign({}, state, {
        remoteMovies: action.movies.items,
      });

    case GET_USERS_FAILED:
      return Object.assign({}, state, {
        remoteMovies: [],
        error: action.message,
      });

    default:
      return state;
  }
}

export default rootReducer;
