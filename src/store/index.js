import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchSagas } from "./sagas";
import reducers from "./reducers";

const saga = createSagaMiddleware();

// for redux devtool browser
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
// for redux devtool browser

const enhancer = composeEnhancers(applyMiddleware(saga));
const store = createStore(reducers, enhancer);
saga.run(watchSagas);

export default store;

// ana bakteb el file da kolo mara wa7da w mosh barga3lo tany
