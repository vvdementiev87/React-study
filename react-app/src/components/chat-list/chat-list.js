import React, { useState, useParams } from "react";
import { List, ListItem} from "@mui/material";
import { useStyles } from "./use-style";
import { AccountCircle } from "@mui/icons-material";

export const ChatList = () => {
    const styles = useStyles();
    
    const { roomId } = useParams();

    const [chatList] = useState([
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
  ]);
    return(
<List component="nav" className={styles.chatList} >
      {chatList.map((chart) => (
      <ListItem key={chart.id} selected={roomId === chart}><ListItemIcon>
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>{chart.name}</ListItem>
      ))}
</List>)}