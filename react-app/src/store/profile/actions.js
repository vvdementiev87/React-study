import { THEMECHANGE, TOGGLE_VISIBLE_PROFILE, UPDATE_PROFILE } from "./types";

export const themeChange = () => {
  return { type: THEMECHANGE };
};
export const toggleVisibleProfile = () => {
  return { type: TOGGLE_VISIBLE_PROFILE };
};

export const updateProfile = (profile) => {
  return { type: UPDATE_PROFILE, payload: profile };
};
