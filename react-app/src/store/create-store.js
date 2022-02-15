import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { gistsReducer } from "./gists";
import { logger, timeScheduler, botMessage } from "./middlewares";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { getPublicGistsApi } from "../api/gists";
import {
  getConversationsApi,
  createConversationsApi,
} from "../api/conversation-api";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  profile: profileReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  gists: gistsReducer,
});

export const persistedReduser = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReduser,
  compose(
    applyMiddleware(
      logger,
      timeScheduler,
      botMessage,
      thunk.withExtraArgument({
        getPublicGistsApi,
        getConversationsApi,
        createConversationsApi,
      })
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);
export const persistor = persistStore(store);
