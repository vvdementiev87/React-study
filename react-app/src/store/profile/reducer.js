import { THEMECHANGE, TOGGLE_VISIBLE_PROFILE, UPDATE_PROFILE } from "./types";

const initialState = {
  firstName: "guest",
  lastName: "guest",
  phone: "+7(900)-9000",
  isDarkTheme: true,
  isVisibleProfile: true,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEMECHANGE:
      return { ...state, isDarkTheme: !state.isDarkTheme };
    case TOGGLE_VISIBLE_PROFILE:
      return { ...state, isVisibleProfile: !state.isVisibleProfile };
    case UPDATE_PROFILE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
