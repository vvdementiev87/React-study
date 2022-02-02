import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { ProfileForm } from "../../components";
import { themeChange, toggleVisibleProfile } from "../../store/profile";
import { useStyles } from "./use-style";

export const ProfilePage = () => {
  const styles = useStyles();
  const {
    isVisibleProfile,
    isDarkTheme,
    firstName,
    lastName,
    phone,
    ...profile
  } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  return (
    <div className={styles.main}>
      <h1>Profile Page</h1>
      <p>Firstname: {firstName}</p>
      <p>Lastname: {lastName}</p>
      <p>Phone number: {phone}</p>
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
          label={`Checkbox for theme change = ${isDarkTheme}`}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              onChange={() => {
                dispatch(toggleVisibleProfile());
              }}
            />
          }
          label={`Checkbox for visibility of profile form = ${isVisibleProfile}`}
        />
      </FormGroup>
      {isVisibleProfile && (
        <ProfileForm
          firstName={firstName}
          lastName={lastName}
          phone={phone}
          {...profile}
        />
      )}
    </div>
  );
};
