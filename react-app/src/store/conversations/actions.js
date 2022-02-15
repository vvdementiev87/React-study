import {
  CREATE_CONVERSATION,
  DELETE_CONVERSATION,
  GET_CONVERSATIONS_ERROR,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_SUCCESS,
  SET_CONVERSATIONS_START,
  SET_CONVERSATIONS_SUCCESS,
  SET_CONVERSATIONS_ERROR,
} from "./types";

export const createConversation = (conversation) => {
  return { type: CREATE_CONVERSATION, payload: conversation };
};
export const deleteConversation = (conversation) => {
  return { type: DELETE_CONVERSATION, payload: conversation };
};

export const getConversationsStart = () => ({
  type: GET_CONVERSATIONS_START,
});

export const getConversationsSuccess = (conversations) => ({
  type: GET_CONVERSATIONS_SUCCESS,
  payload: conversations,
});

export const getConversationsError = (error) => ({
  type: GET_CONVERSATIONS_ERROR,
  payload: error,
});

export const setConversationsStart = () => ({
  type: SET_CONVERSATIONS_START,
});

export const setConversationsSuccess = (conversation) => ({
  type: SET_CONVERSATIONS_SUCCESS,
  payload: conversation,
});

export const setConversationsError = (error) => ({
  type: SET_CONVERSATIONS_ERROR,
  payload: error,
});
