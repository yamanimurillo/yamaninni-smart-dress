import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

//add all reducers you want
export default combineReducers(
    {
        user: userReducer,
        cart: cartReducer
    }
);