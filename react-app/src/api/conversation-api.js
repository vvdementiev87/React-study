import { ref, child, get, set, push, remove, update } from "firebase/database";
import { firebaseDB } from "./firebase";

export const getConversationsApi = async () => {
  const dbRef = ref(firebaseDB);
  console.log("getConversationsApi dbRef", dbRef);
  const result = await get(child(dbRef, `conversations`))
    .then((snapshot) => {
      return snapshot;
    })
    .catch((error) => {
      console.error("getConversationsApi: error", error);
      return error;
    });

  return result;
};

export const createConversationsApi = async (conversationId) => {
  console.log("newConversationRef: firebaseDB", firebaseDB);
  const dbRef = ref(firebaseDB);

  console.log("newConversationRef: dbRef ", dbRef);
  const newConversationRef = push(dbRef);
  const updates = {};
  updates["/conversations/" + newConversationRef.key] = {
    id: newConversationRef.key,
    title: conversationId,
    value: "",
  };
  updates["/messages/" + newConversationRef.key] = false;
  console.log("reateConversationsApi: newConversationRef", newConversationRef);
  const result = await update(dbRef, updates)
    .then(() => {
      return {
        id: newConversationRef.key,
        title: conversationId,
        value: "",
      };
    })
    .catch((error) => {
      console.error("createConversationsApi: error", error);
      return error;
    });
  console.log(result);
  return result;
};

export const removeConversationsApi = async (conversationId) => {
  console.log("newConversationRef: firebaseDB", firebaseDB);
  const dbRef = ref(firebaseDB, `conversations/${conversationId}`);
  const dbRefM = ref(firebaseDB, `messages/${conversationId}`);
  console.log("newConversationRef: dbRef ", dbRef);
  await remove(dbRefM);
  const result = await remove(dbRef)
    .then(() => {
      return "Success";
    })
    .catch((error) => {
      console.error("createConversationsApi: error", error);
      return error;
    });
  console.log("result", result);
  return result;
};
