import { compose, createStore } from "redux";
import { reducerCounter } from "../reducers/reducerCounter";

// Middleware for nextapp - *** JUST development environment
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

export const store = createStore(reducerCounter, composeEnhancers());