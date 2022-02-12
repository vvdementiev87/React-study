import {
  getGistsStart,
  getGistsSuccess,
  getGistsError,
  searchGistsError,
  searchGistsStart,
  searchGistsSuccess,
} from "./actions";

export const getGists = (page) => async (dispatch, _, api) => {
  dispatch(getGistsStart());
  try {
    const { data } = await api.getPublicGistsApi(page);
    dispatch(getGistsSuccess(data));
  } catch (error) {
    dispatch(getGistsError(error));
  }
};

export const searchGists = (name) => async (dispatch, _, api) => {
  try {
    dispatch(searchGistsStart());

    const { data } = await api.searchGistsByNameApi(name);

    dispatch(searchGistsSuccess(data));
  } catch (e) {
    dispatch(searchGistsError(e));
  }
};
