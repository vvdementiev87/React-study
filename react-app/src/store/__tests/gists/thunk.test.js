import {
  getGists,
  getGistsStart,
  getGistsSuccess,
  getGistsError,
  searchGists,
  searchGistsStart,
  searchGistsSuccess,
  searchGistsError,
} from "../../gists";

describe("get gists thunk", () => {
  it("success", async () => {
    const PAGE = 2;
    const dispatch = jest.fn();
    const getPublicGistsApi = jest.fn().mockResolvedValue({ data: "Ok" });
    const thunk = getGists(PAGE);
    await thunk(dispatch, null, { getPublicGistsApi });

    expect(getPublicGistsApi).toBeCalledWith(PAGE);
    expect(getPublicGistsApi).toBeCalledTimes(1);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, getGistsStart());
    expect(dispatch).toHaveBeenNthCalledWith(2, getGistsSuccess("Ok"));
  });

  it("error", async () => {
    const PAGE = 2;
    const ERROR = { error: "error" };
    const dispatch = jest.fn();
    const getPublicGistsApi = jest.fn().mockRejectedValue(ERROR);
    const thunk = getGists(PAGE);
    await thunk(dispatch, null, { getPublicGistsApi });

    expect(getPublicGistsApi).toBeCalledWith(PAGE);
    expect(getPublicGistsApi).toBeCalledTimes(1);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, getGistsStart());
    expect(dispatch).toHaveBeenNthCalledWith(2, getGistsError(ERROR));
  });
});
describe("search gists thunk", () => {
  it("success", async () => {
    const NAME = "Search";
    const dispatch = jest.fn();
    const searchGistsByNameApi = jest
      .fn()
      .mockResolvedValue({ data: "Search" });
    const thunk = searchGists(NAME);
    await thunk(dispatch, null, { searchGistsByNameApi });

    expect(searchGistsByNameApi).toBeCalledWith(NAME);
    expect(searchGistsByNameApi).toBeCalledTimes(1);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, searchGistsStart());
    expect(dispatch).toHaveBeenNthCalledWith(2, searchGistsSuccess("Search"));
  });

  it("error", async () => {
    const NAME = "Search";
    const ERROR = { error: "error" };
    const dispatch = jest.fn();
    const searchGistsByNameApi = jest.fn().mockRejectedValue(ERROR);
    const thunk = searchGists(NAME);
    await thunk(dispatch, null, { searchGistsByNameApi });

    expect(searchGistsByNameApi).toBeCalledWith(NAME);
    expect(searchGistsByNameApi).toBeCalledTimes(1);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, searchGistsStart());
    expect(dispatch).toHaveBeenNthCalledWith(2, searchGistsError(ERROR));
  });
});
