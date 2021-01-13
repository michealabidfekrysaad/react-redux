import { GET_MOVIES_RECEIVE, GET_MOVIES_REQUEST } from "../types/Movies";

// de lel request  
// payload is any thing request can take ex:params 
export const moviesRequest = (payload) => ({
    type: GET_MOVIES_REQUEST,
    payload
})

// de lel receive
// ana banade 3aleha mn ./sagas/Movies 3n tare2 yield put .....
// w betro7 tet3amel m3 el reducer
export const moviesReceive = (payload) => ({
    type: GET_MOVIES_RECEIVE,
    payload
})

// le fo2 dol esmohom action creators