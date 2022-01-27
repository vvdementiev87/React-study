import React from "react";
import ReactDOM from "react-dom";
import {
  MessageComponent,
  ChatList,
  ChatPage,
  ProfilePage,
} from "./components";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStyles } from "./style";
import "./global.css";

const AppComponent = () => {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <ChatList />
      <MessageComponent />
    </div>
  );
};

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
