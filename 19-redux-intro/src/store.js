import { combineReducers, createStore } from "redux"; // it is deprecated and recommended to use modern redux-toolkit
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
// combining reducers

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
});

// creating store

const store = createStore(rootReducer);



export default store




