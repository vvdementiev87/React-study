import { useEffect, useState } from "react";
import { useStyles } from "./use-style";

const URL = "https://api.github.com/gists/public";

const getGists = async () => {
  const response = await fetch(URL, {
    method: "GET",
  });

  const data = await response.json();

  return data;
};

export const GistsPage = () => {
  const styles = useStyles();
  const [gists, setGists] = useState([]);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setPending(true);
        const response = await getGists();
        setGists(response);
        console.log(response);
      } catch (e) {
        setError(e);
      } finally {
        setPending(false);
      }
    }
    fetchData();
  }, []);
  return (
    <div className={styles.main}>
      <p>{pending && "pending"}</p>
      {gists.map((gist, index) => (
        <div key={index} className={styles.text}>
          <p>{index}</p>
          <p>{gist.url}</p>
          <p>{gist.description}</p>
        </div>
      ))}
    </div>
  );
};
