import { ref, child, get, set, push } from "firebase/database";
import { firebaseDB } from "./firebase";

export const getConversations = (conversationId) => {
  const dbRef = ref(firebaseDB);
  console.log(dbRef);
  get(child(dbRef, `conversations/${conversationId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export const setConversations = (conversationId) => {
  const dbSet = firebaseDB;
  console.log(dbSet);
  const dbRef = ref(dbSet, "conversations");
  const newConversationRef = push(dbRef);
  console.log("newConversationRef", newConversationRef);
  set(newConversationRef, {
    name: conversationId,
  });
};
