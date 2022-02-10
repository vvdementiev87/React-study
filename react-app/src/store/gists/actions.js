import { GET_GISTS_ERROR, GET_GISTS_START, GET_GISTS_SUCCESS } from "./types";

export const getGistsStart = () => {
  return {
    type: GET_GISTS_START,
  };
};
export const getGistsSuccess = (gists) => {
  return {
    type: GET_GISTS_SUCCESS,
    payload: gists,
  };
};
export const getGistsError = (error) => {
  return {
    type: GET_GISTS_ERROR,
    payload: error,
  };
};
