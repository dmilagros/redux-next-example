import { combineReducers, compose, createStore } from "redux";
import { reducerCounter, reducerAuth } from "../reducers/reducerCounter";

// Middleware for nextapp - *** JUST development environment
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const reducerGeneral = combineReducers({
  counter: reducerCounter,
  auth: reducerAuth,
})

export const store = createStore(reducerGeneral, composeEnhancers());