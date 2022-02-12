import { useStyles } from "./use-style";
import { useEffect, useState } from "react";
import { getGists, searchGists, gistsSelector } from "../../store/gists";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";

const searchGistsDebounced = debounce((query, dispatch) => {
  dispatch(searchGists(query));
}, 1000);

export const GistsPage = () => {
  const styles = useStyles();
  const [count, setCount] = useState(1);
  const [value, setValue] = useState("bogdanq");
  const dispatch = useDispatch();
  const { gists, pending, error } = useSelector(gistsSelector());
  const { gistsSearch, errorSearch, pendingSearch } = useSelector(
    gistsSelector()
  );

  console.log("gistsSearch", gistsSearch);

  useEffect(() => {
    dispatch(getGists(count));
  }, [dispatch, count]);

  useEffect(() => {
    searchGistsDebounced(value, dispatch);
  }, [dispatch, value]);

  if (pending || pendingSearch) {
    return (
      <div className={styles.main}>
        <p>pending....</p>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div>{!!error && "Error"}</div>
      <div>{!!errorSearch && "ErrorSearch"}</div>
      <div>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          prev
        </button>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          next
        </button>

        {gists?.map((gist, index) => (
          <div key={index} className={styles.text}>
            <p>{index + 1}</p>
            <p>{gist.url}</p>
            <p>{gist.description}</p>
          </div>
        ))}
      </div>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="enter name"
        />

        {gistsSearch?.map((gist, index) => (
          <div key={index} className={styles.text}>
            <p>{index + 1}</p>
            <p>{gist.url}</p>
            <p>{gist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
