import { takeEvery, call, put } from "redux-saga/effects";
import { DATA_LOADED } from "./action-types";

export default function* watcherSaga() {
  yield takeEvery(DATA_LOADED, workerSaga);
}

function* workerSaga(action) {
  try {
    const payload = yield call(AddMovie, action.payload.url);
    console.log(payload);
    yield put({ type: DATA_LOADED, payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

function AddMovie(url) {
 return fetch(url).then(response => response.json());
}
