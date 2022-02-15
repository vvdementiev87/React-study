import {
  getConversationsStart,
  getConversationsSuccess,
  getConversationsError,
  setConversationsStart,
  setConversationsSuccess,
  setConversationsError,
} from "./actions";

export const getConversationsFb = () => async (dispatch, _, api) => {
  const conversations = [];

  try {
    dispatch(getConversationsStart());

    const snapshotFb = await api.getConversationsApi();
    console.log("getConversationsFb: snapshotFb", snapshotFb);
    snapshotFb.forEach((snap) => {
      conversations.push(snap.val());
    });

    dispatch(getConversationsSuccess(conversations));
  } catch (e) {
    dispatch(getConversationsError(e));
  }
};

export const createConversationsFb = (name) => async (dispatch, _, api) => {
  try {
    dispatch(setConversationsStart());

    const conversation = await api.createConversationsApi(name);
    console.log("setConversationsFb: conversation", conversation);

    dispatch(setConversationsSuccess(conversation));
  } catch (e) {
    dispatch(setConversationsError(e));
  }
};
