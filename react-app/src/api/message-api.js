import { ref, child, get, set, push } from "firebase/database";
import { firebaseDB } from "./firebase";

export const getMessagesApi = async () => {
  const dbRef = ref(firebaseDB);
  console.log("getConversationsApi dbRef", dbRef);
  const result = await get(child(dbRef, `conversations`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log("getConversationsApi: data recieved", snapshot);
        return snapshot;
      } else {
        console.log("getConversationsApi: No data available");
        return {};
      }
    })
    .catch((error) => {
      console.error("getConversationsApi: error", error);
      return error;
    });

  return result;
};

export const createMessagesApi = async (conversationId) => {
  console.log("newConversationRef: firebaseDB", firebaseDB);
  const dbRef = ref(firebaseDB, `conversations`);
  console.log("newConversationRef: dbRef ", dbRef);
  const newConversationRef = push(dbRef);
  console.log("reateConversationsApi: newConversationRef", newConversationRef);
  await set(newConversationRef, {
    title: conversationId,
    value: "",
  });
  return {
    title: conversationId,
    value: "",
  };
};
