import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { List } from "@mui/material";
import { useStyles } from "./use-style";
import { Chat } from "../chat";

export const ChatList = () => {
  const styles = useStyles();

  const { roomId } = useParams();

  const [chatList] = useState(["room1", "room2", "room3"]);
  return (
    <List component="nav" className={styles.chatList}>
      {chatList.map((chat) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat title={chat} selected={roomId === chat} />
        </Link>
      ))}
    </List>
  );
};
