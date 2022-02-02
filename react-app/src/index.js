import React from "react";
import ReactDOM from "react-dom";
import { Header, ChatPage } from "./components";
import { ProfilePage } from "./pages";
import {Provider} from "react-redux"
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {store} from "./store";

import "./global.css";

/* const AppComponent = () => {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      {<ChatList />}
      {<MessageComponent />}
    </div>
  );
}; */

const theme = createTheme({
  /* Used colors:
         #ece8e3
        #f1e0b1
        #eab67a
        #b69479
        #908373
        #8e9e82 */
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
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      {/* <AppComponent /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
