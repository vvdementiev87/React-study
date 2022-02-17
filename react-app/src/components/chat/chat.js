import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import { useStyles } from "./use-style";

export function Chat({
  id,
  title,
  selected,
  handleListItemClick,
  deleteConversationByName,
}) {
  const styles = useStyles();

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
