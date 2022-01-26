import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  console.log("Ctx 2",ctx);
  return {    
    messages: {
      width: "100%",
      maxWidth: "1024px",
      padding: "20px",
      gap: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    messagesInput: {
      width: "100%",
      maxWidth: "1024px",
      padding: "20px 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    message: {
      color: "#ffffff",
      border: "none",
      padding: "10px",
      borderRadius: "5px",
      backgroundColor: "#46be46",
      width: "100%",
      gap: "10px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    messageText: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
    }
  };
});
