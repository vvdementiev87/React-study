import { SET_USER_ERROR, SET_USER_LOGOUT, SET_USER_LOGIN } from "./types";

const initialState = {
  session: null,
  error: null,
};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOGIN:
      return {
        ...state,
        session: action.payload,
        error: null,
      };
    case SET_USER_LOGOUT:
      return {
        ...state,
        session: null,
        error: null,
      };
    case SET_USER_ERROR:
      return {
        ...state,
        session: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
