import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  console.log("Chat-pages", ctx);
  return {
    main: {
      width: "100%",
      maxWidth: "1024px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
    text: {
      width: "100%",
      display: "grid",
      gridTemplateRows: "1fr",
      gridTemplateColumns: "1fr 4fr 3fr",
      "& p": { border: "1px solid #999999" },
    },
  };
});
