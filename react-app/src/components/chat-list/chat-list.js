import { useParams, Link, useNavigate } from "react-router-dom";
import { Button, List } from "@mui/material";
import { useStyles } from "./use-style";
import { Chat } from "../chat";
import { useSelector, useDispatch } from "react-redux";
import {
  createConversation,
  deleteConversation,
} from "../../store/conversations";
import { useCallback } from "react";

export const ChatList = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const { roomId } = useParams();

  const dispatch = useDispatch();

  const conversations = useSelector(
    (state) => state.conversations.conversations
  );
  const createConversationByButton = () => {
    const name = prompt("введите имя комнаты");
    const isValidName = !conversations.includes(name);
    if (name && isValidName) {
      dispatch(createConversation(name));
      console.log(name);
      console.log(conversations);
    } else {
      alert("Невалидная комната");
    }
  };

  const deleteConversationByName = useCallback(
    (name) => {
      dispatch(deleteConversation(name));
      setTimeout(() => navigate("/chat"), 100);
    },
    [dispatch, navigate]
  );

  return (
    <List component="nav" className={styles.chatList}>
      <Button
        variant="contained"
        color="success"
        onClick={createConversationByButton}
      >
        + Room
      </Button>
      {conversations.map((chat) => (
        <Link key={chat} to={`/chat/${chat}`} className={styles.chatItem}>
          <Chat
            title={chat}
            selected={roomId === chat}
            deleteConversationByName={deleteConversationByName}
          />
        </Link>
      ))}
    </List>
  );
};
