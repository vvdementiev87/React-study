import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import { useStyles } from "./use-style";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function Chat({
  id,
  title,
  selected,
  handleListItemClick,
  deleteConversationByName,
}) {
  const styles = useStyles();
  const navigate = useNavigate();
  const SET_CONVERSATIONS_ERROR = useSelector((s) => s);

  return (
    <ListItem
      className={styles.item}
      button={true}
      selected={selected}
      onClick={handleListItemClick}
    >
      <ListItemIcon>
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>
      <div className={styles.description}>
        <ListItemText className={styles.text} primary={title} />
      </div>
      <IconButton
        aria-label="delete"
        size="small"
        color="error"
        onClick={() => deleteConversationByName(id)}
      >
        <Delete fontSize="inherit" />
      </IconButton>
    </ListItem>
  );
}
