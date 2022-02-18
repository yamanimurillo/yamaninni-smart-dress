import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

//add all reducers you want
export default combineReducers(
    {
        user: userReducer
    }
);