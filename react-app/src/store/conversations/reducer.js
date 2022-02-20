import {
  CREATE_CONVERSATION,
  DELETE_CONVERSATION,
  GET_CONVERSATIONS_ERROR,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_SUCCESS,
  SET_CONVERSATIONS_START,
  SET_CONVERSATIONS_SUCCESS,
  SET_CONVERSATIONS_ERROR,
  DELETE_CONVERSATIONS_ERROR,
  DELETE_CONVERSATIONS_START,
  DELETE_CONVERSATIONS_SUCCESS
} from "./types";

const initialState = {
  conversations: [],
  pending: false,
  error: null,
};

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONVERSATION:
      return {
        ...state,
        conversations: [...state.conversations, action.payload],
      };
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation !== action.payload
        ),
      };
    case GET_CONVERSATIONS_START:
      return { ...state, pending: true, error: null };
    case GET_CONVERSATIONS_SUCCESS:
      return { ...state, pending: false, conversations: action.payload };
    case GET_CONVERSATIONS_ERROR:
      return { ...state, pending: false, error: action.payload };

    case SET_CONVERSATIONS_START:
      return { ...state, pending: true, error: null };
    case SET_CONVERSATIONS_SUCCESS:
      return {
        ...state,
        pending: false,
        conversations: [...state.conversations, action.payload],
      };
    case SET_CONVERSATIONS_ERROR:
      return { ...state, pending: false, error: action.payload };

      case DELETE_CONVERSATIONS_START:
        return { ...state, pending: true, error: null };
      case DELETE_CONVERSATIONS_SUCCESS:
        return {
          ...state,
          pending: false,
          conversations: state.conversations.filter(
            ({id}) => id !== action.payload
          ),          
        };
      case DELETE_CONVERSATIONS_ERROR:
        return { ...state, pending: false, error: action.payload };

    default:
      return state;
  }
};
