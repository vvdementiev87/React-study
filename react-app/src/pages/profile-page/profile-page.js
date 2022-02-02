
import { Checkbox } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {themeChange} from "../../store/profile"


export const ProfilePage = () => {
  const state=useSelector(state=>state);
  const dispatch=useDispatch();
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Firstname: {state.firstName}</p>
      <p>Lastname: {state.lastName}</p>
      <Checkbox onChange={()=>{console.log(state.isDarkTheme);dispatch(themeChange())}}></Checkbox>
      
    </div>
  );
};
