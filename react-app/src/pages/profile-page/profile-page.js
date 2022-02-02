import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { themeChange } from "../../store/profile";
import { useStyles } from "./use-style";

export const ProfilePage = () => {
  const styles = useStyles();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className={styles.main}>
      <h1>Profile Page</h1>
      <p>Firstname: {state.firstName}</p>
      <p>Lastname: {state.lastName}</p>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              onChange={() => {
                dispatch(themeChange());
              }}
            />
          }
          label={`Checkbox for theme change = ${state.isDarkTheme}`}
        />
      </FormGroup>
    </div>
  );
};
