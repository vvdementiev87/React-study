import { CREATE_CONVERSATION, DELETE_CONVERSATION } from "./types";

const initialState = {
  room1: [
    { author: "User", text: "value 1", date: new Date() },
    { author: "Bot", text: "value 2", date: new Date() },
  ],
  room2: [
    { author: "User", text: "value 1", date: new Date() },
    { author: "Bot", text: "value 2", date: new Date() },
  ],
  room3: [
    { author: "User", text: "value 1", date: new Date() },
    { author: "Bot", text: "value 2", date: new Date() },
  ],
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
        conversations: [
          ...state.conversations.filter(
            (conversation) => conversation !== action.payload
          ),
        ],
      };
    default:
      return state;
  }
};
