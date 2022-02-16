import {
  sendMessage,
  getMessagesStart,
  getMessagesSuccess,
  getMessagesError,
  setMessagesStart,
  setMessagesError,
  setMessagesSuccess,
} from "./actions";

export const sendMessageWithBot = (roomId, message) => (dispatch, getState) => {
  dispatch(sendMessage(roomId, message));
  if (message.author === "User") {
    setTimeout(() => {
      dispatch(
        sendMessage(roomId, { author: "Bot", text: "message from Bot thunk" })
      );
    }, 500);
  }
};

export const getMessagesFb = (roomId) => async (dispatch, _, api) => {
  const messages = [];

  try {
    dispatch(getMessagesStart());

    const snapshotFb = await api.getMessagesApi(roomId);
    console.log("getConversationsFb: snapshotFb", snapshotFb.val());

    if (snapshotFb.exists()) {
      snapshotFb.forEach((snap) => {
        console.log(snap.val());
        messages.push(snap.val());
      });
    }
    console.log(messages);
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
