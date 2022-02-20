import { useState } from "react";
import { useDispatch } from "react-redux";
import { useStyles } from "./use-style";
import { Input, Button } from "@mui/material";
import { updateProfile } from "../../store/profile";

export function ProfileForm({ firstName, lastName, phone }) {
  const styles = useStyles();
  const [form, setForm] = useState({ firstName, lastName, phone });
  const dispatch = useDispatch();

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  return (
    <div className={styles.wrapper}>
      <h1>Edit profile</h1>

      <div className={styles.form}>
        <Input
          fullWidth
          placeholder="Введите first name..."
          value={form.firstName}
          inputProps={{
            "data-name": "firstName",
          }}
          onChange={handleChangeForm}
        />
        <Input
          fullWidth
          placeholder="Введите last name..."
          value={form.lastName}
          inputProps={{
            "data-name": "lastName",
          }}
          onChange={handleChangeForm}
        />
        <Input
          fullWidth
          placeholder="Введите  phone..."
          value={form.phone}
          inputProps={{
            "data-name": "phone",
          }}
          onChange={handleChangeForm}
        />

        <Button onClick={() => dispatch(updateProfile(form))}>save form</Button>
      </div>
    </div>
  );
}
