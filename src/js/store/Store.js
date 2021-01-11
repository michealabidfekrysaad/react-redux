import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./RootReducer";
// import { forbiddenWordsMiddleware } from "../middleware";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
// import apiSaga from "./api-saga";

// const initialiseSagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// we use thunk because Redux is expecting objects as actions, but we're trying to return a Promise
const Store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(thunk))
);

// initialiseSagaMiddleware.run(apiSaga);

export default Store;