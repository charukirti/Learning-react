import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice'
import cartRedcucer from './features/cart/CartSlice'
const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartRedcucer,
    }
});

export default store