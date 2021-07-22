import { combineReducers } from "redux";
import user from './User';
import product from './Product'

const rootReducer = combineReducers({
    user,
    product
});

export default rootReducer;