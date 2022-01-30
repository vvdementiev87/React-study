import React, { useEffect, useState, useRef, useCallback } from "react";
import { useStyles } from "./use-style";
import { Button, Input, InputLabel } from "@mui/material";
import { useParams } from "react-router-dom";

export const MessageComponent = () => {
  const timeOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState({
    room1: [
      { author: "User", text: "value 1", date: new Date() },
      { author: "Bot", text: "value 2", date: new Date() },
    ],
    room2: [
      { author: "User", text: "value 1", date: new Date() },
      { author: "Bot", text: "value 2", date: new Date() },
    ],
    room3: [
      { author: "User", text: "value 1", date: new Date() },
      { author: "Bot", text: "value 2", date: new Date() },
    ],
  });
  const styles = useStyles();
  const { roomId } = useParams();
  const ref = useRef(null);

  const sendMessage = useCallback(
    (message, author = "User") => {
      if (message) {
        console.log(message);
        setMessageList((state) => ({
          ...state,
          [roomId]: [
            ...(state[roomId] ?? []),
            { author, text: message, date: new Date() },
          ],
        }));

        setMessage("");
      }
    },
    [roomId]
  );

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    handleScrollBottom();
  }, [messageList, handleScrollBottom]);

  useEffect(() => {
    const messages = messageList[roomId] ?? [];
    const lastMessage = messages[messages.length - 1];

    if (messages.length && lastMessage.author === "User") {
      setTimeout(() => {
        sendMessage("bot message", "Bot");
      }, 500);
    }
  }, [messageList, roomId, sendMessage]);

  const hadlePressInput = (event) => {
    if (event.code === "Enter") {
      sendMessage();
    }
  };

  const messages = messageList[roomId] ?? [];

  return (
    <div className={styles.messages}>
      <div className={styles.messagesList} ref={ref}>
        {messages.map((message, id) => (
          <div
            key={id}
            className={
              message.author === "Bot"
                ? styles.messageLeft
                : styles.messageRight
            }
          >
            <p className={styles.messageText}>{message.author}</p>
            <p>{message.text}</p>
            <p className={styles.messageText}>
              {message.date.toLocaleString("ru", timeOptions)}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.messagesInput}>
        <InputLabel htmlFor="messageId">Input message: </InputLabel>
        <Input
          id="messageId"
          onChange={(event) => setMessage(event.target.value)}
          placeholder="message..."
          value={message}
          fullWidth
          onKeyPress={hadlePressInput}
        />
        <Button onClick={() => sendMessage(message)}>Send</Button>
      </div>
    </div>
  );
};
