import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  console.log("Ctx 3",ctx);
  return {
    chatList:{
      width: "100%",
      maxWidth: "150px",
      color: "#ffffff",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#8e9e82",
      textDecoration:"none",
    },
    chatItem:{
      textDecoration:"none",
    }
  };
});
