import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  console.log("Chat-pages", ctx);
  return {
    main: {
      width: "100%",
      maxWidth: "500px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
  };
});
