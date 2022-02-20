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

const initialState = {
  messages: [],
  pending: false,
  error: null,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] ?? []),
            {
              ...action.payload.message,
            },
          ],
        },
      };
    case DELETE_MESSAGE_BY_ID:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };

    case GET_MESSAGES_START:
      return { ...state, pending: true, error: null };
    case GET_MESSAGES_SUCCESS:
      return { ...state, pending: false, messages: action.payload };
    case GET_MESSAGES_ERROR:
      return { ...state, pending: false, error: action.payload };

    case SET_MESSAGES_START:
      return { ...state, pending: true, error: null };
    case SET_MESSAGES_SUCCESS:
      return {
        ...state,
        pending: false,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] ?? []),
            {
              ...action.payload.message,
            },
          ],
        },
      };
    case SET_MESSAGES_ERROR:
      return { ...state, pending: false, error: action.payload };

    case DELETE_MESSAGES_START:
      return { ...state, pending: true, error: null };
    case DELETE_MESSAGES_SUCCESS:
      return {
        ...state,
        pending: false,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            ({ id }) => id !== action.payload.messageId
          ),
        },
      };
    case DELETE_MESSAGES_ERROR:
      return { ...state, pending: false, error: action.payload };

    default:
      return state;
  }
};
