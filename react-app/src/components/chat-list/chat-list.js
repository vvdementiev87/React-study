import { useParams, Link, useNavigate } from "react-router-dom";
import { Button, List } from "@mui/material";
import { useStyles } from "./use-style";
import { Chat } from "../chat";
import { useSelector, useDispatch } from "react-redux";
import {
  conversationsSelector,
  getConversationsFb,
  createConversationsFb,
  deleteConversationsFb,
} from "../../store/conversations";
import { useCallback, useEffect } from "react";

export const ChatList = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const { conversations, pending } = useSelector(conversationsSelector());

  console.log(conversations);

  const createConversationByButton = () => {
    const name = prompt("введите имя комнаты");
    const isValidName = !conversations.includes(name);
    if (name && isValidName) {
      dispatch(createConversationsFb(name));
    } else {
      alert("Невалидная комната");
    }
  };

  const deleteConversationByName = useCallback(
    (name) => {
      dispatch(deleteConversationsFb(name));
      setTimeout(() => navigate("/chat"), 100);
    },
    [dispatch, navigate]
  );

  useEffect(() => {
    dispatch(getConversationsFb());
  }, [dispatch]);

  if (pending) {
    return (
      <List component="nav" className={styles.chatList}>
        <p>pending....</p>
      </List>
    );
  }

  return (
    <List component="nav" className={styles.chatList}>
      <Button
        variant="contained"
        color="success"
        onClick={createConversationByButton}
      >
        + Room
      </Button>
      {conversations.map((chat, index) => (
        <Link key={index} to={`/chat/${chat.id}`} className={styles.chatItem}>
          <Chat
            id={chat.id}
            title={chat.title}
            selected={roomId === chat.id}
            deleteConversationByName={deleteConversationByName}
          />
        </Link>
      ))}
    </List>
  );
};
