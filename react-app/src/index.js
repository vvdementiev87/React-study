import React from "react";
import ReactDOM from "react-dom";
import { MessageComponent } from "./components";
import { List, ListItem, ThemeProvider, createTheme } from "@mui/material";
import { useStyles } from "./style";
import "./global.css";

const AppComponent = () => {
  const styles = useStyles();
  const chatList = [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
  ];
  return (
  <div className={styles.main}>
    <List className={styles.chatList} >
      {chatList.map((chart) => (
        <ListItem key={chart.id}>{chart.name}</ListItem>
      ))}
    </List>
    <MessageComponent />
  </div>
  );
};

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppComponent />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
