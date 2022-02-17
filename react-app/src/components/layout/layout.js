import React from "react";
import { useStyles } from "./use-style";

export const Layout = ({ chats, messages }) => {
  const styles = useStyles();
  return (
    <div className={styles.main}>
      <div>{chats}</div>
      <div className={styles.messages}>{messages}</div>
    </div>
  );
};
