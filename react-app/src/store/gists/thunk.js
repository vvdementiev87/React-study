import { getGistsStart, getGistsSuccess, getGistsError } from "./actions";

export const getGists = (page) => async (dispatch, _, api) => {
  dispatch(getGistsStart());
  try {
    const { data } = await api.getPublicGistsApi(page);
    dispatch(getGistsSuccess(data));
  } catch (error) {
    dispatch(getGistsError(error));
  }
};

export const getGistsByUser = (name) => async (dispatch, _, api) => {
  dispatch(getGistsStart());
  try {
    const { data } = await api.searchGistsByNameApi(name);
    dispatch(getGistsSuccess(data));
  } catch (error) {
    dispatch(getGistsError(error));
  }
};
