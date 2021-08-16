

import { types } from "../types/types";

// 2 - ACTIONS
export const loginAction = {
  type: types.login,
  payload: {
    user: 'Pedro',
    password: 'Pedro123'
  }
}

export const logoutAction = {
  type: types.logout
}