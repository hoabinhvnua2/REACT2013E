import { combineReducers } from "redux";
import Count from "./count";
import Name from "./name";
import Products from "./products";

const rootReducer = combineReducers({
  Count,
  Name,
  Products,
});

export default rootReducer;
