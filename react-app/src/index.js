import React from "react";
import ReactDOM from "react-dom";
import { MessageComponent } from "./components";
import { List, ListItem, ThemeProvider } from "@mui/material";
import stylesList from "./index.module.css";
import { createTheme } from "@mui/system";

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

const theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppComponent />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
