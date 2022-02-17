import { ref, child, get, set, push, remove, update } from "firebase/database";
import { nanoid } from "nanoid";
import { firebaseDB } from "./firebase";

export const getMessagesApi = async (roomId) => {
  const dbRef = ref(firebaseDB);
  console.log("getMessagesApi dbRef", dbRef);
  const result = await get(child(dbRef, `messages`))
    .then((snapshot) => {
      return snapshot;
    })
    .catch((error) => {
      console.error("getMessagesApi: error", error);
      return error;
    });

  return result;
};

export const createMessagesApi = async (roomId, message) => {
  console.log("roomId", roomId);
  const postListRef = ref(firebaseDB, `/messages/${roomId}`);
  const newMessage = { ...message, id: nanoid(), date: String(new Date()) };
  const newMessageRef = push(postListRef);

  await set(newMessageRef, {
    ...newMessage,
  }).catch((error) => {
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
