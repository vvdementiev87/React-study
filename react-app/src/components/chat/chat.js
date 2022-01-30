import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useStyles } from "./use-style";

export function Chat({ title, selected, handleListItemClick }) {
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
        <ListItemText className={styles.text} primary="12.30" />
      </div>
    </ListItem>
  );
}
