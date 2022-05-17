import { createSlice } from "@reduxjs/toolkit";

import cartItemss from '../../CartItems'

const initialState = {
	cartItems: cartItemss,
	amount: 0,
	total: 0,
	isLoading: true,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		removeItems: (state, action) => {

			state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
		},
		increment: (state, { payload }) => {
			console.log("action", cartItemss);
			const findProduct = state.cartItems.find((item) => {
				console.log("item.id", item.id);
			})
			console.log("state", state);
			// state.amount = findProduct.amount + 1;
		}

	}
})
export default cartSlice.reducer;
export const { removeItems, increment } = cartSlice.actions;
// console.log("cartSlice", cartSlice);