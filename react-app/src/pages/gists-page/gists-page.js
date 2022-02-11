import { useStyles } from "./use-style";
import { useEffect, useState } from "react";
import { getGists, gistsSelector } from "../../store/gists";
import { useDispatch, useSelector } from "react-redux";

export const GistsPage = () => {
  const styles = useStyles();
  const [count, setCount] = useState("1");

  const dispatch = useDispatch();
  const { pending, error } = useSelector(gistsSelector());
  
  console.log("Selector", useSelector(gistsSelector()));
  console.log("Count",count );
  useEffect(() => {
    
    dispatch(getGists(count));
  }, [dispatch, count]);

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
      </div>
  );
};
