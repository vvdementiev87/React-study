import{THEMECHANGE} from "./types";

const initialState ={
    firstName:"guest",
    lastName:"guest",
    isDarkTheme:true,
};

export const profileReducer = (state=initialState, action)=>{
    switch (action.type){
        case THEMECHANGE:
           return {...state, isDarkTheme: !state.isDarkTheme };
        default:
            return state;
    }
}