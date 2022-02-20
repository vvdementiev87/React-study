import { setUserError, setUserLogin, setUserError } from "./actions";

export const setSession = (user) => async (dispatch, _, api) => {
  try {
    const { data } = await api.getPublicGistsApi(page);
    dispatch(setUserLogin(data));
  } catch (error) {
    dispatch(setUserError(error));
  }
};
