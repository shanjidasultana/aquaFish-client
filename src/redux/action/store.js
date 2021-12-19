
import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducers from "../reducer";
import logger from 'redux-logger';
// import cartReducer from "../reducer/Counter";


const middleware=[thunk];
if(process.env.NODE_ENV==="development"){
    middleware.push(logger)
}
// const combinedReducer = combineReducers({
//     cart: cartReducer,
//     // user: userReducer,
// })



const store = createStore(rootReducers,applyMiddleware(...middleware));



// const middleware=applyMiddleware(thunk)



// export const store = createStore(combinedReducer, composeWithDevTools(middleware))
export default store;
