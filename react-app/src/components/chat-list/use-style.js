import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  console.log("Ctx 3", ctx);
  return {
    chatList: {
      width: "100%",
      maxWidth: "300px",
      color: "#ffffff",
      border: "none",
      borderRadius: "5px",
      backgroundColor: ctx.palette.primary.main,
      textDecoration: "none",
    },
    chatItem: {
      textDecoration: "none",
    },
  };
});
