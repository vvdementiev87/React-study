import {
  GET_GISTS_ERROR,
  GET_GISTS_START,
  GET_GISTS_SUCCESS,
  SEARCH_GISTS_SUCCESS,
  SEARCH_GISTS_START,
  SEARCH_GISTS_ERROR,
} from "./types";

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

export const searchGistsStart = () => {
  return {
    type: SEARCH_GISTS_START,
  };
};
export const searchGistsSuccess = (gists) => {
  return {
    type: SEARCH_GISTS_SUCCESS,
    payload: gists,
  };
};
export const searchGistsError = (error) => {
  return {
    type: SEARCH_GISTS_ERROR,
    payload: error,
  };
};
