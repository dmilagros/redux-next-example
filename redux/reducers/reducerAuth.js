import { types } from "../types/types";

/* 
  const auth = {}
  const auth ={
    user: 'Milagros',
    password: '123456'
  }
*/

export const reducerAuth = (state = {}, action) => {
  // 3 - REDUCER
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