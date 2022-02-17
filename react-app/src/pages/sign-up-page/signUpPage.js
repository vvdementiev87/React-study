import { Button } from "@mui/material";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../../api/firebase";

const onSubmit = (email, password) => {
  const auth = getAuth(firebaseApp);
  return createUserWithEmailAndPassword(auth, email, password)
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

export function SignUpPage() {
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
      <h1>Sign-up Page</h1>
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
        Sign-up
      </Button>
    </div>
  );
}
