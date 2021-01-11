import { DATA_LOADED } from "./action-types";

const initialState = {
  // articles: [],
  remoteMovies: []
};

function rootReducer(state = initialState, action) {
  // if (action.type === ADD_ARTICLE) {
  //   return Object.assign({}, state, {
  //     articles: state.articles.concat(action.payload)
  //   });
  // }

  if (action.type === DATA_LOADED) {
    // console.log("inside the reducer Completed");
    return Object.assign({}, state, {
      remoteMovies: action.payload
    });
  }
  return state;
}

export default rootReducer;