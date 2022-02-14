import { ref, child, get, set, push } from "firebase/database";
import { firebaseDB } from "./firebase";

export const getConversations = (conversationId) => {
  const dbRef = ref(firebaseDB);
  console.log("getConversations dbRef",dbRef);
  get(child(dbRef, `conversations/${conversationId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error("getConversations error",error);
    });
};

export const setConversations = (conversationId) => {  
  console.log("dbSet",firebaseDB);
  const dbRef = ref(firebaseDB, `conversations`);
  console.log("dbRef ", dbRef );  
  const newConversationRef = push(dbRef);
  console.log("newConversationRef", newConversationRef);  
  set(newConversationRef , conversationId);
};
