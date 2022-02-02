import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  console.log("Chat style", ctx);
  return {
    text: {
      color: "#ffffff",
      "& span": {
        textDecoration: "none",
      },
    },
    description: {
      padding: "3px",
    },
    icon: {
      width: "32px",
    },
  };
});
