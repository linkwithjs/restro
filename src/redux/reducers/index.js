import { combineReducers } from "redux";
import cartReducer from "./cart.red";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
