import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // cart: []
    cart: [
        {
            pizzaId: 12,
            name: 'Mediterranen',
            quantity: 2,
            unitPrice: 16,
            totalPrice: 32, 
        }
    ]
};

const cartSlice = createSlice({
    name: 'cart',
    reducers: {
        addItem(state, action) {
            //payload = newitem
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            //payload = pizzaID
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload);

        },
        increaseItemQuantity(state, action) {
            //payload = pizzaID
            const item = state.cart.find(item => item.pizzaId === action.payload);
            item.quantity++;

            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreseItemQuantity(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload);
            item.quantity--;

            item.totalPrice = item.quantity * item.unitPrice;
        },
        clearCart(state) {
            state.cart = [];
        },
    }
});


export const {addItem, deleteItem, increaseItemQuantity, decreseItemQuantity, clearCart} = cartSlice.actions

export default cartSlice.reducer