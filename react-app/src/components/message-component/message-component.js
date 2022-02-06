import React, { useEffect, useState, useRef, useCallback } from "react";
import { useStyles } from "./use-style";
import { Message } from "../message";
import { Button, Input } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../../store/messages";
import { messagesSelectorByRoomId } from "../../store/messages";

export const MessageComponent = () => {
  const styles = useStyles();
  const { roomId } = useParams();
  const ref = useRef(null);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const messages = useSelector(messagesSelectorByRoomId(roomId));

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(sendMessage(roomId, { author: author, text: message }));
        setMessage("");
      }
    },
    [dispatch, roomId]
  );

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
      sendMessage(message);
    }
  };

  return (
    <div className={styles.messages} ref={ref}>
      <div className={styles.messagesList}>
        {messages.map((message, index) => (
          <Message key={index} message={message} roomId={roomId} />
        ))}
      </div>
      <div className={styles.messagesInput}>
        <Input
          id="messageId"
          onChange={(event) => setMessage(event.target.value)}
          placeholder="message..."
          value={message}
          fullWidth
          onKeyPress={hadlePressInput}
        />
        <Button onClick={() => send(message)}>Send</Button>
      </div>
    </div>
  );
};
