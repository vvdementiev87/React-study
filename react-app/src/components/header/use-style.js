import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  console.log("header style", ctx);
  return {
    link: {
      color: "#fff",
      textDecoration: "none",
      transition: "all 0.5s",
      "&:hover": {
        color: "rgb(243, 219, 219)",
        textDecoration: "underline",
      },
    },
  };
});
