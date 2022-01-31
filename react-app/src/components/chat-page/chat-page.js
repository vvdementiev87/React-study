import React, { useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import { ChatList, MessageComponent, Layout } from "../../components";
import { useStyles } from "./use-style";

export const ChatPage = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chat");
      }
    };
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, [navigate]);
  return (
    <div className={styles.main}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              chats={<ChatList />}
              messages={<h1 style={{ color: "#000000" }}>Выберите чат</h1>}
            />
          }
        />
        <Route
          path=":roomId"
          element={
            <Layout chats={<ChatList />} messages={<MessageComponent />} />
          }
        />
      </Routes>
    </div>
  );
};
