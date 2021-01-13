import * as types from "../types/Movies";

const INITIAL_SATE = {};

// ana hena b3mel return fe el state (store) 3ashan ab2a shayelale ana esta2belto mn el request
// ale hwa el response.data fe el saga inside movies.js 
// cycle is movies inside  saga=> movies inside actions=> then here => add payload inside store
export const MoviesReducer = (state = INITIAL_SATE, action) => {
  // console.log(action.type);
  switch (action.type) {
    case types.GET_MOVIES_RECEIVE:
      return action.payload;
    default:
      return state;
  }
};

export default MoviesReducer;
