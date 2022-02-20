import {
  messagesReducer,
  sendMessage,
  deleteMessage,
  getMessagesStart,
  getMessagesError,
  getMessagesSuccess,
  setMessagesStart,
  setMessagesError,
  setMessagesSuccess,
} from "../../messages";

describe("Messages reducer", () => {
  describe("get messages", () => {
    it("start", () => {
      const state = messagesReducer(
        {
          pending: false,
          error: true,
        },
        getMessagesStart()
      );
      expect(state.pending).toBe(true);
      expect(state.error).toBe(null);
    });
    it("success", () => {
      const MESSAGE = "test message";
      const state = messagesReducer(
        {
          pending: true,
          messages: [],
        },
        getMessagesSuccess(MESSAGE)
      );
      expect(state.pending).toBe(false);

      expect(state.messages).toEqual(MESSAGE);
    });
    it("error", () => {
      const ERROR = "test error";
      const state = messagesReducer(
        {
          pending: true,
          error: null,
        },
        getMessagesError(ERROR)
      );
      expect(state.pending).toBe(false);
      expect(state.error).toEqual(ERROR);
    });
  });
  describe("set messages", () => {
    it("start", () => {
      const state = messagesReducer(
        {
          pending: false,
          error: true,
        },
        setMessagesStart()
      );
      expect(state.pending).toBe(true);
      expect(state.error).toBe(null);
    });
    it("success", () => {
      const MESSAGE = { author: "User", message: "Test" };
      const state = messagesReducer(
        {
          pending: true,
          messages: [],
          error: null,
        },
        setMessagesSuccess("room1", MESSAGE)
      );
      console.log("state set messages", JSON.stringify(state));
      expect(state.pending).toBe(false);

      expect(state.messages).toEqual({ room1: [MESSAGE] });
      expect(state.messages.room1).toBeDefined();
      expect(state.messages.room1.length).toBe(1);
      expect(state.messages.room1[0].author).toBe(MESSAGE.author);
      expect(state.messages.room1[0].message).toBe(MESSAGE.message);
    });
    it("error", () => {
      const ERROR = "test error";
      const state = messagesReducer(
        {
          pending: true,
          error: null,
        },
        setMessagesError(ERROR)
      );
      expect(state.pending).toBe(false);
      expect(state.error).toEqual(ERROR);
    });
  });
  describe("other type", () => {
    it("send message", () => {
      const MESSAGE = { author: "User", message: "Test" };
      const state = messagesReducer(
        {
          messages: [],
          pending: false,
          error: null,
        },
        sendMessage("room1", MESSAGE)
      );
      console.log("state other", JSON.stringify(state));
      expect(state.messages).toEqual({ room1: [MESSAGE] });
      expect(state.messages.room1).toBeDefined();
      expect(state.messages.room1.length).toBe(1);
      expect(state.messages.room1[0].author).toBe(MESSAGE.author);
      expect(state.messages.room1[0].message).toBe(MESSAGE.message);
    });
    it("delete message by id", () => {
      const MESSAGE = { id: 1 };
      const state = messagesReducer(
        {
          messages: { room1: [MESSAGE] },
          pending: false,
          error: null,
        },
        deleteMessage("room1", 1)
      );

      expect(state.messages.room1.length).toBe(0);
    });
  });
});
