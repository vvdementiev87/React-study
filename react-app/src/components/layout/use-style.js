import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  console.log("layout styles", ctx);
  
  return {
    main: {
      width:"100%",           
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",      
    },
    messages:{
      width:"100%",   
    }
  };
});
