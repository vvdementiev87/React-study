import { ref, child, get, set, push,remove } from "firebase/database";
import { firebaseDB } from "./firebase";

export const getConversationsApi = async () => {
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

export const createConversationsApi = async (conversationId) => {
  console.log("newConversationRef: firebaseDB", firebaseDB);
  const dbRef = ref(firebaseDB, `conversations`);
  console.log("newConversationRef: dbRef ", dbRef);
  const newConversationRef = push(dbRef);
  console.log("reateConversationsApi: newConversationRef", newConversationRef);
  const result = await set(newConversationRef, {
    id:newConversationRef.key,
    title: conversationId,
    value: "",
  }).then(()=> {return {
    id:newConversationRef.key,
    title: conversationId,
    value: "",
  }}).catch((error) => {
    console.error("createConversationsApi: error", error);
    return error;
  });  

  return result;
};

export const removeConversationsApi = async (conversationId) => {
  console.log("newConversationRef: firebaseDB", firebaseDB);
  const dbRef = ref(firebaseDB, `conversations/${conversationId}`);
  console.log("newConversationRef: dbRef ", dbRef);
  const result = await remove(dbRef).then(()=> {return ("Success")}).catch((error) => {
    console.error("createConversationsApi: error", error);
    return error;
  });  

  return result;
};
