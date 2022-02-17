import { SET_USER_LOGIN, SET_USER_LOGOUT, SET_USER_ERROR } from "./types";

export const setUserLogin = (session) => {
  return {
    type: SET_USER_LOGIN,
    payload: session,
  };
};
export const setUserLogout = (session) => {
  return {
    type: SET_USER_LOGOUT,
    payload: session,
  };
};
export const setUserError = (error) => {
  return {
    type: SET_USER_ERROR,
    payload: error,
  };
};
