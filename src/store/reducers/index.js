import { combineReducers } from "redux";

import BooksReducer from "./Books";
import { loader } from "../Loader/LoaderReducer";

// bagama3 kol el reducers akenohom wa7ed w banade 3aleha fe index.js inside store
export default combineReducers({
    BooksReducer,
    loader
})