import * as types from "../types/Books";

const INITIAL_SATE = {};

// ana hena b3mel return fe el state (store) 3ashan ab2a shayelale ana esta2belto mn el request
// ale hwa el response.data fe el saga inside books.js
// cycle is books inside  saga=> books inside actions=> then here => add payload inside store
export const BooksReducer = (state = INITIAL_SATE, action) => {
  // console.log(action.type);
  switch (action.type) {
    case types.GET_BOOKS_RECEIVE:
      return action.payload;
    default:
      return state;
  }
};

export default BooksReducer;
