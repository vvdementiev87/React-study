import { useStyles } from "./use-style";
import { useEffect, useState } from "react";
import { getGists, getGistsByUser, gistsSelector } from "../../store/gists";
import { useDispatch, useSelector } from "react-redux";

export const GistsPage = () => {
  const styles = useStyles();
  const [count, setCount] = useState("1");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { gists, pending, error } = useSelector(gistsSelector());
  const handleChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    /* dispatch(getGists(count)); */
    dispatch(getGistsByUser(name));
  }, [dispatch, count, name]);

  if (pending) {
    return (
      <div className={styles.main}>
        <p>Pending...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className={styles.main}>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.main}>
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
            <p>{index}</p>
            <p>{gist.url}</p>
            <p>{gist.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.main}>
        <input type="text" value={name}></input>
        <button
          onClick={() => {
            handleChange();
          }}
        >
          prev
        </button>

        {gists?.map((gist, index) => (
          <div key={index} className={styles.text}>
            <p>{index}</p>
            <p>{gist.url}</p>
            <p>{gist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
