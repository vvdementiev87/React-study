import React, { useEffect, useState, useRef, useCallback} from "react";
import { useStyles } from "./use-style";
import { Button, Input, InputLabel } from "@mui/material";

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
  const [messages, setMessages] = useState([]);
  const styles = useStyles();
  const ref = useRef(null);
  let timerId = null;

  useEffect(() => {
    ref.current?.focus();
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.author !== "Bot" && messages.length > 0) {
      timerId = setTimeout(() => {
        setMessages([
          ...messages,
          { author: "Bot", text: "Bot message", date: new Date() },
        ]);
      }, 1000);
    }
    return () => clearInterval(timerId);
    
  }, [messages]);

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    handleScrollBottom();
  }, [messages, handleScrollBottom]);

  const hadlePressInput = (event) => {
    if (event.code === "Enter") {
      sendMessage();
    }
  };

  

  const sendMessage = () => {
    if (message) {
      setMessages([
        ...messages,
        { author: "User", text: message, date: new Date() },
      ]);
      setMessage("");
    } else {
      alert("Enter your message");
    }
  };

  return (
    <div className={styles.messages}>
      <div className={styles.messagesList} ref={ref}>
      {messages.map((message, id) => (
        <div key={id} className={(message.author==="Bot") ? styles.messageLeft : styles.messageRight}>
          <p className={styles.messageText}>{message.author}</p>
          <p>{message.text}</p>
          <p className={styles.messageText}>{message.date.toLocaleString("ru", timeOptions)}</p>
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
      <Button onClick={sendMessage}>Send</Button>
    </div>
    </div>
  );
};
