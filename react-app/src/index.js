import React from "react";
import ReactDOM from "react-dom";
import { MessageComponent } from "./components";
import { List, ListItem, ThemeProvider, createTheme } from "@mui/material";
import stylesList from "./index.module.css";

const AppComponent = () => {
  const chatList = [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
  ];
  return (
    <div className={stylesList.main}>
      <List>
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
