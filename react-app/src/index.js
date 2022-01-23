import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.css";

const AppComponent = () => {
  return (
    <div>
      <MessageComponent />
    </div>
  );
};

const MessageComponent = () => {
  const timeOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    timezone: "UTC",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  let timerId = null;

  useEffect(() => {
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
      {messages.map((message, id) => (
        <div key={id} className={styles.message}>
          <h2>Message number {id + 1}:</h2>
          <p>Author: {message.author}</p>
          <p>{message.text}</p>
          <p>Date: {message.date.toLocaleString("ru", timeOptions)}</p>
        </div>
      ))}
      <label htmlFor="messageId">Input message: </label>
      <input
        id="messageId"
        onChange={(event) => setMessage(event.target.value)}
        placeholder="message..."
        value={message}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>,
  document.getElementById("root")
);
