import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  console.log(ctx);
  return {
    root: {
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
    },
    messages: {
      width: "100%",
      maxWidth: "1024px",
      padding: "20px",
      gap: "30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    message: {
      width: "100%",
      gap: "10px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  };
});
