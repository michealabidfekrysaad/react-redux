import { all } from "redux-saga/effects";

import { getBooksSaga } from "./Books";

// hena b3mel listen 3ala kol el saga ale fe el project
// 3n tare2 array of fns
// lazem a3mel le getBooksSaga calling matensahash tany
export function* watchSagas() {
  yield all([getBooksSaga()]);
}
