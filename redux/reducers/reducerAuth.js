import { types } from "../types/types";

export const reducerAuth = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        user: action.payload, /* send real data */
      }
    case types.logout:
      return {}

    default:
      return state;
  }
}