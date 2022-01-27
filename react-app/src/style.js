import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  console.log("Ctx 1",ctx);
  return {
    /* #ece8e3
        #f1e0b1
        #eab67a
        #b69479
        #908373
        #8e9e82 */
    main: {
      width: "100%",
      maxWidth: "1280px",
      padding: "20px 20px 0 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      minHeight:"100vh",
    },
    chatList:{
      width: "100%",
      maxWidth: "150px",
      color: "#ffffff",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#8e9e82",
    }
  };
});
