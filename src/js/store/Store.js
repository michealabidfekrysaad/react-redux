import { createStore, applyMiddleware } from "redux"; //compose
import rootReducer from "./RootReducer";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import {userSaga} from "./api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// we use thunk because Redux is expecting objects as actions, but we're trying to return a Promise
const Store = createStore(
  rootReducer,
  // storeEnhancers(applyMiddleware(thunk, initialiseSagaMiddleware))
  applyMiddleware(initialiseSagaMiddleware)
  );
  
  initialiseSagaMiddleware.run(userSaga);

export default Store;