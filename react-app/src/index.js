import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { Header } from "./components";
import { ProfilePage, ChatPage } from "./pages";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store, persistor } from "./store";

import "./global.css";

const AppComponent = () => {
  const state = useSelector((state) => state.profile);
  const darkTheme = {
    palette: {
      primary: {
        main: "#8e9e82",
        dark: "#f1e0b1",
        light: "#eab67a",
      },
      secondary: {
        main: "#b69479",
        dark: "#908373",
        light: "#ece8e3",
      },
    },
  };
  const theme = createTheme(state.isDarkTheme ? darkTheme : {});

  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/chat/*" element={<ChatPage />} />
            <Route path="/" element={<h1>Home page</h1>} />
            <Route path="/*" element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppComponent />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
