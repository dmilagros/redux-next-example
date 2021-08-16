import { types } from "../types/types";

const initialState = {
  counter: 10
}

export const reducerCounter = (state = initialState, action) => {
  switch (action.type) {
    case types.addCounter:
      return {
        ...state,
        counter: state.counter + 1
      }
    case types.removeCounter:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state;
  }
}