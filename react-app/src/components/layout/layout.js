import React from "react";

export const Layout = ({ chats, messages }) => {
  return (
    <div>
      <div>{chats}</div>
      <div>{messages}</div>
    </div>
  );
};
