import { useStyles } from "./use-style";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../store/messages";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

export function Message({ message, roomId }) {
  const styles = useStyles();
  const dispatch = useDispatch();

  return (
    <div
      key={message.id}
      className={
        message.author === "Bot" ? styles.messageLeft : styles.messageRight
      }
    >
      <p className={styles.messageText}>{message.author}</p>
      <p>{message.message}</p>
      <p>{Date(message.date)}</p>
      {/* <p className={styles.messageText}>{message?.date}</p> */}
      <div>
        <IconButton
          aria-label="delete"
          size="small"
          color="error"
          onClick={() => dispatch(deleteMessage(roomId, message?.id))}
        >
          <Delete fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
}
