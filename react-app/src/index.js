import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { Header, PrivateRoute, PublicRoute } from "./components";
import {
  ProfilePage,
  ChatPage,
  GistsPage,
  LoginPage,
  SignUpPage,
  HomePage,
} from "./pages";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store, persistor } from "./store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "./api/firebase";

import "./global.css";

const AppComponent = () => {
  const state = useSelector((state) => state.profile);
  const [session, setSession] = useState(null);

  useEffect(() => {
    console.log(onAuthStateChanged);
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  const isAuth = !!session;

  console.log(session);
  console.log("console.log(isAuth);", isAuth);

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
          <Header session={session} isAuth={isAuth} />
          <Routes>
            <Route
              path="/profile"
              element={
                <PrivateRoute isAuth={isAuth}>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/chat/*"
              element={
                <PrivateRoute isAuth={isAuth}>
                  <ChatPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/gists/*"
              element={
                <PrivateRoute isAuth={isAuth}>
                  <GistsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute isAuth={isAuth}>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/sign-up"
              element={
                <PublicRoute isAuth={isAuth}>
                  <SignUpPage />
                </PublicRoute>
              }
            />
            <Route path="/" element={<HomePage isAuth={isAuth} />} />
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
