import { DATA_LOADED_AGAIN, GET_USERS_FAILED } from "./action-types";

const initialState = {
  // articles: [],
  remoteMovies: [],
  error: null
};

function rootReducer(state = initialState, action) {
  if (action.type === DATA_LOADED_AGAIN) {
    return Object.assign({}, state, {
      remoteMovies: action.movies.items,
    });
  }
  if (action.type === GET_USERS_FAILED) {
    return Object.assign({}, state, {
      remoteMovies: [],
      error: action.message
    });
  }
  return state;
}

export default rootReducer;
