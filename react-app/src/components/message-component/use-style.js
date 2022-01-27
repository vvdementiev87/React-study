import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  console.log("Ctx 2",ctx);
  return {    
    messages: {
      width: "100%",
      maxWidth: "1024px",
      padding: "20px 0 20px 20px",
      display: "flex",
      flexDirection: "column", 
           alignItems: "center",
           
           justifyContent: "space-between",
           /* alignSelf:"stretch", */
    },
    messagesList: {
      width: "100%",      
      gap: "10px",
      display: "flex",
      flexDirection: "column", 
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
    
    messageLeft: {      
      alignSelf:"flex-start",
      color: "#ffffff",
      border: "none",
      padding: "10px",
      borderRadius: "5px",
      backgroundColor: "#eab67a",
      width: "80%",
      gap: "10px",
      margin: "0 10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"      
    },
    messageRight: {      
      alignSelf:"flex-end",
      color: "#ffffff",
      border: "none",
      padding: "10px",
      borderRadius: "5px",
      backgroundColor: "#b69479",
      width: "80%",      
      gap: "10px",
      margin: "0 10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"      
    },
    messageText: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
    }
  };
});
