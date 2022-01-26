import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  console.log("Ctx 1",ctx);
  return {
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
