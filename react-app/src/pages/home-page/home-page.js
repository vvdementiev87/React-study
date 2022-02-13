import { Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { firebaseApp } from "../../api/firebase";
import { getConversations } from "../../api/conversation-api";

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

export function HomePage(props) {
  const { isAuth } = props;
  return (
    <div>
      <h1>Home Page</h1>

      {!!isAuth && (
        <Button
          onClick={() => {
            onSubmit();
          }}
        >
          Sign Out
        </Button>
      )}
      <Button
        onClick={() => {
          getConversations(props.userId);
        }}
      >
        DB
      </Button>
    </div>
  );
}
