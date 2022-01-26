import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  console.log("Ctx 1",ctx);
  return {
    root: {
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
      backgroundColor:"#fff7006b",
    },
    main: {
      width: "100%",
      maxWidth: "1280px",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    }
  };
});
