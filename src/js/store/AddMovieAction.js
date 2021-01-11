import { DATA_LOADED } from "./action-types";


  export function AddMovie(payload) {
    // console.log(payload.title);
    return function(dispatch) {
      return fetch(`https://www.googleapis.com/books/v1/volumes?q=${payload.title}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: DATA_LOADED, payload: json.items });
          // console.log(json.items);
        });
    };
  }

  // export function AddMovie(url) {
  //   return { type: DATA_LOADED , payload: { url } };  }


  // it is not used due to saga principles
