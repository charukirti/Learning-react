import { combineReducers, createStore } from "redux";

// importing reducers

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// combining all the reducers

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
});


const store = createStore(rootReducer);


// exporting store for integrating in react

export default store

