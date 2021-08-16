/* 
  const auth = {}
  const auth ={
    user: 'Milagros',
    password: '123456'
  }
*/

import { types } from "../types/types";

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