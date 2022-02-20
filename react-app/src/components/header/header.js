import * as React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  Tooltip,
  IconButton,
  Avatar,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useStyles } from "./use-style";
import { getAuth, signOut } from "firebase/auth";
import { firebaseApp } from "../../api/firebase";

const pages = [{ title: "Home", to: "/" }];
const pagesWithSession = [
  { title: "Chat", to: "/chat" },
  { title: "Profile", to: "/profile" },
  { title: "Gists", to: "/gists" },
];
const pagesWithoutSession = [
  { title: "Login", to: "/login" },
  { title: "Sign-up", to: "/sign-up" },
];

export const Header = (props) => {
  const { isAuth } = props;
  const styles = useStyles();
  const state = useSelector((state) => state.profile);
  console.log("header auth", props);
  const onSubmit = () => {
    const auth = getAuth(firebaseApp);
    return signOut(auth)
      .then((userCredential) => {
        console.log("signed out");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode", errorCode);
        console.log("errorMessage", errorMessage);
      });
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link className={styles.link} to={page.to}>
                  {page.title}
                </Link>
              </Button>
            ))}
            {!!isAuth &&
              pagesWithSession.map((page) => (
                <Button
                  key={page.title}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link className={styles.link} to={page.to}>
                    {page.title}
                  </Link>
                </Button>
              ))}
            {!isAuth &&
              pagesWithoutSession.map((page) => (
                <Button
                  key={page.title}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link className={styles.link} to={page.to}>
                    {page.title}
                  </Link>
                </Button>
              ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
            {!!isAuth && (
              <Button
                color="secondary"
                onClick={() => {
                  onSubmit();
                }}
              >
                Sign Out
              </Button>
            )}

            <Tooltip title={state.firstName + " " + state.lastName}>
              <IconButton /* onClick={handleOpenUserMenu} */>
                <Avatar alt="W" />
              </IconButton>
            </Tooltip>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
