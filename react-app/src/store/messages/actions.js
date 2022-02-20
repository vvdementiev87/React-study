import {
  SEND_MESSAGE,
  DELETE_MESSAGE_BY_ID,
  SET_MESSAGES_START,
  SET_MESSAGES_ERROR,
  SET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  DELETE_MESSAGES_ERROR,
  DELETE_MESSAGES_START,
  DELETE_MESSAGES_SUCCESS,
} from "./types";

export const sendMessage = (roomId, message) => {
  return {
    type: SEND_MESSAGE,
    payload: { roomId, message },
    /* meta: { delay: 1000 }, */
  };
};
export const deleteMessage = (roomId, messageId) => {
  return { type: DELETE_MESSAGE_BY_ID, payload: { roomId, messageId } };
};

export const getMessagesStart = () => ({
  type: GET_MESSAGES_START,
});

export const getMessagesSuccess = (messages) => ({
  type: GET_MESSAGES_SUCCESS,
  payload: messages,
});

export const getMessagesError = (error) => ({
  type: GET_MESSAGES_ERROR,
  payload: error,
});

export const setMessagesStart = () => ({
  type: SET_MESSAGES_START,
});

export const setMessagesSuccess = (roomId, message) => ({
  type: SET_MESSAGES_SUCCESS,
  payload: { roomId, message },
});

export const setMessagesError = (error) => ({
  type: SET_MESSAGES_ERROR,
  payload: error,
});

export const deleteMessagesStart = () => ({
  type: DELETE_MESSAGES_START,
});

export const deleteMessagesSuccess = (roomId, messageId) => ({
  type: DELETE_MESSAGES_SUCCESS,
  payload: { roomId, messageId },
});

export const deleteMessagesError = (error) => ({
  type: DELETE_MESSAGES_ERROR,
  payload: error,
});
