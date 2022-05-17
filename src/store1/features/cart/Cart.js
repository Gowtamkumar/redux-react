import { createSlice } from "@reduxjs/toolkit";

import cartItems from '../../CartItems'

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        removeItems: (state, action) => {
            console.log("action", action);
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
        }
    }
})
export default cartSlice.reducer;
export const { removeItems } = cartSlice.actions;
// console.log("cartSlice", cartSlice);