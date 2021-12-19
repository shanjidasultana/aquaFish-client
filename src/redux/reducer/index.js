import handleCart from "./handleCart";
// import userReducer from './userReducer';
import userReducer from './userSlice';
import { combineReducers } from "redux";
// import cartReducer from "./Counter";


const rootReducers = combineReducers({
    handleCart,
    user:userReducer,
    // cart: cartReducer,

})
export default rootReducers;





