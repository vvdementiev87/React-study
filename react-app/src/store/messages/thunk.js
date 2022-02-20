import {
  sendMessage,
  getMessagesStart,
  getMessagesSuccess,
  getMessagesError,
  setMessagesStart,
  setMessagesError,
  setMessagesSuccess,
} from "./actions";

export const sendMessageWithBot = (roomId, message) => (dispatch, _) => {
  dispatch(sendMessage(roomId, message));
  if (message.author === "User") {
    setTimeout(() => {
      dispatch(
        createMessagesFb(roomId, { author: "Bot", message: "message from Bot thunk" })
      );
    }, 500);
  }
};

export const getMessagesFb = () => async (dispatch, _, api) => {
  const messages = {};

  try {
    dispatch(getMessagesStart());

    const snapshotFb = await api.getMessagesApi();
    console.log("getConversationsFb: snapshotFb", snapshotFb);
    const messagesL=[];
    if (snapshotFb.exists()) {
      snapshotFb.forEach((snap) => {               
        messagesL[snap.key]=[];
        messages[snap.key]=[];
        console.log("snapshotFb.child(snap.key)",snapshotFb.child(snap.key));
        snapshotFb.child(snap.key).forEach((snapshot) => {
          if (snap.key!==snapshot.val()){console.log("message snapshotFb.child(snap.key).forEach((snapshot)",snapshot.val());
          messages[snap.key].push(snapshot.val());}
          
        });
      })

      console.log("messages step 1",messagesL);

     
    }
    console.log("getMessagesFb messages",messages);
    dispatch(getMessagesSuccess(messages));
  } catch (e) {
    dispatch(getMessagesError(e));
  }
};

export const createMessagesFb =
  (roomId, message) => async (dispatch, _, api) => {
    try {
      dispatch(setMessagesStart());

      const newMessage = await api.createMessagesApi(roomId, message);
      console.log("setConversationsFb: conversation", newMessage);

      dispatch(setMessagesSuccess(roomId, newMessage));
    } catch (e) {
      dispatch(setMessagesError(e));
    }
  };

/* export const deleteConversationsFb =
  (conversationId) => async (dispatch, _, api) => {
    try {
      dispatch(deleteConversationsStart());

      await api.removeConversationsApi(conversationId);
      console.log("deletetConversationsFb: conversation", conversationId);

      dispatch(deleteConversationsSuccess(conversationId));
    } catch (e) {
      dispatch(deleteConversationsError(e));
    }
  };  */
