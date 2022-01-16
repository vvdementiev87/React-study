import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.css";

const AppComponent = () => {
  const messages = [
    {
      author: "Michael",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo debitis laborum eius itaque assumenda harum deserunt enim. Officia aliquam maxime nulla reiciendis commodi autem magni!",
      date: new Date(2022, 0, 2),
    },
    {
      author: "Fedor",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo debitis laborum eius itaque assumenda harum deserunt enim. Officia aliquam maxime nulla reiciendis commodi autem magni!",
      date: new Date(2021, 0, 1),
    },
    {
      author: "Maga",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo debitis laborum eius itaque assumenda harum deserunt enim. Officia aliquam maxime nulla reiciendis commodi autem magni!",
      date: new Date(2001, 1, 12),
    },
  ];
  return <MessageComponent messages={messages} />;
};

function MessageComponent({ messages }) {
  const timeOptions = {
    era: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    timezone: "UTC",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return (
    <div className={styles.messages}>
      {messages.map((message, id) => {
        return (
          <div data-id={id} className={styles.message}>
            <h2>Message number {id + 1}:</h2>
            <p>Author: {message.author}</p>
            <p>{message.text}</p>
            <p>Date: {message.date.toLocaleString("ru", timeOptions)}</p>
          </div>
        );
      })}
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>,
  document.getElementById("root")
);
