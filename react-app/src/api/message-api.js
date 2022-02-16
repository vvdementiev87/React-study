import { ref, child, get, set, push, remove, update } from "firebase/database";
import { nanoid } from "nanoid";
import { firebaseDB } from "./firebase";

export const getMessagesApi = async (roomId) => {
  const dbRef = ref(firebaseDB);
  console.log("getMessagesApi dbRef", dbRef);
  const result = await get(child(dbRef, `messages/${roomId}`))
    .then((snapshot) => {
      return snapshot;
    })
    .catch((error) => {
      console.error("getMessagesApi: error", error);
      return error;
    });

  return result;
};

export const createMessagesApi = async (message, roomId) => {
  const newMessage = { ...message, id: nanoid(), date: new Date() };

  await push(child(ref(firebaseDB), roomId), newMessage).catch((error) => {
    console.error("createMessagesApi: error", error);
    return error;
  });

  return newMessage;
};

export const removeConversationsApi = async (conversationId) => {
  console.log("newConversationRef: firebaseDB", firebaseDB);
  const dbRef = ref(firebaseDB, `conversations/${conversationId}`);
  console.log("newConversationRef: dbRef ", dbRef);
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
