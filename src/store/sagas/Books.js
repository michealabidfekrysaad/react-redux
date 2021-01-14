import { call, put, takeLatest } from "redux-saga/effects";
import * as API from "../../network/Apis";
import * as types from "../types/Books";
import * as ACTIONS from "../actions/Books";

// call 3ashan  a3mel call lel  api
//  put 3ashan a7ot el response gowa el store

export function* getBooksRequest({ payload }) {
  // el payload hwa ale beyetba3at mn el component lel api
  // kemlent yield mohema ya baniadam 3ashan asha3'al el fn calling
  try {
    // console.log(payload.searchValue);
    const response = yield call(API.getBooks, payload);
    yield put(ACTIONS.BooksReceive(response.data));
  } catch (err) {
    // yield put(ACTIONS.booksReceive(err));
    console.log(err.config.headers["failed"]);
  }
}

// el fn deh bet3mel fire le kol request
export function* getBooksSaga() {
  yield takeLatest(types.GET_BOOKS_REQUEST, getBooksRequest);
}
