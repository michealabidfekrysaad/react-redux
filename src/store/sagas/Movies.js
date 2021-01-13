import { call, put, takeLatest } from "redux-saga/effects";
import * as API from "../../network/Apis";
import { GET_MOVIES_REQUEST } from "../types/Movies";
import * as ACTIONS from "../actions/Movies";

// call 3ashan  a3mel call lel  api
//  put 3ashan a7ot el response gowa el store

export function* getMoviesRequest ({payload}) {
    // el payload hwa ale beyetba3at mn el component lel api
    // kemlent yield mohema ya baniadam 3ashan asha3'al el fn calling
    try{
        // console.log(payload.searchValue);
        const response = yield call(API.getMovies, payload)
        yield put(ACTIONS.moviesReceive(response.data));
    }catch (err) {
        // yield put(ACTIONS.moviesReceive(err));
        console.log("network error happen");
    }
}

// el fn deh bet3mel fire le kol request
export function* getMoviesSaga () {
    yield takeLatest(GET_MOVIES_REQUEST, getMoviesRequest)
}