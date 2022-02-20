import { Button } from "@mui/material";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../../api/firebase";

const onSubmit = (email, password) => {
  const auth = getAuth(firebaseApp);
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("new user", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorCode", errorCode);
      console.log("errorMessage", errorMessage);
    });
};

export function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <input
        placeholder="email"
        onChange={handleChangeForm}
        data-name="email"
        value={form.email}
      />
      <input
        placeholder="password"
        onChange={handleChangeForm}
        data-name="password"
        value={form.password}
      />
      <Button
        onClick={() => {
          onSubmit(form.email, form.password);
        }}
      >
        Login
      </Button>
    </div>
  );
}
