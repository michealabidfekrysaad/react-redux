import * as types from "../types/Books";

// de lel request  
// payload is any thing request can take ex:params 
export const BooksRequest = (payload) => ({
    type: types.GET_BOOKS_REQUEST,
    payload
})

// de lel receive
// ana banade 3aleha mn ./sagas/Books 3n tare2 yield put .....
// w betro7 tet3amel m3 el reducer
export const BooksReceive = (payload) => ({
    type: types.GET_BOOKS_RECEIVE,
    payload
})

// le fo2 dol esmohom action creators

// export const loading = (bool)=>{
//     return bool ? {
//       type:"SHOW_LOADER",
//       data:bool
//     }: {
//       type: "HIDE_LOADER",
//       data: bool
//     }
//   }