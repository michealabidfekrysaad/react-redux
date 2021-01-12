import { takeEvery, call, put } from "redux-saga/effects";
import { DATA_LOADED, DATA_LOADED_AGAIN, GET_USERS_FAILED  } from "./action-types";

// export default function* watcherSaga() {
//   yield takeEvery(DATA_LOADED, workerSaga);
// }

// // el  fn deh betro7 lel reducer
// function* workerSaga(action) {
//   try {
//     const payload = yield call(AddMovie, action.payload.url);
//     console.log(payload);
//     yield put({ type: DATA_LOADED, payload });
//   } catch (e) {
//     yield put({ type: "API_ERRORED", payload: e });
//   }
// }

// function AddMovie(url) {
//  return fetch(url).then(response => response.json());
// }

// export function* watchMovie() {
//   yield takeEvery(DATA_LOADED, movieAsync)
// }

// function* movieAsync() {
//   yield put({ type: "DATA_LOADED_AGAIN", value: "micheal" })
// }

const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=";

function getApi(action) {
  return function inside () {
      return fetch(`${apiUrl}${action.value}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .catch((err) => console.log(err));
    }
}

function* fetchUsers (action) {
  // console.log(action.value);
  try{
    const movies = yield call(getApi(action));
    yield put({ type: DATA_LOADED_AGAIN, movies: movies })
  }catch(e) {
    yield put({ type: GET_USERS_FAILED, message:"network-failure-please-try-again" })
  }
}

export function* userSaga () {
  yield takeEvery( DATA_LOADED, fetchUsers)
}

// ana ba3et mina mn el form w kateb fe el url micheal