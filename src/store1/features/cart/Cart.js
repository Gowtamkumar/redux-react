import { createSlice } from "@reduxjs/toolkit";

import cartItemss from '../../CartItems'

const initialState = {
	cartItems: cartItemss,
	amount: 0,
	totalqty: 0,
	total: 0,
	isLoading: true,
	data: {},
	sendData: {}
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {

		handleChange: (state, action) => {
			state.data = action.payload
		},
		handleSubmit: (state, action) => {
			state.sendData = state.data
			console.log("state", state.data);
		},
		handleReset: (state, action) => {
			state.data = {}
			state.sendData = {}
		},
		removeItems: (state, action) => {
			state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
		},
		increments: (state, action) => {
			const cartItem = state.cartItems.find((item) => item.id === action.payload)
			state.amount = cartItem.price + state.amount;
			cartItem.qty = cartItem.qty + 1;
			state.totalqty = state.totalqty + 1
		},

		decrements: (state, action) => {
			const cartItem = state.cartItems.find((item) => item.id === action.payload)
			cartItem.qty = cartItem.qty - 1;
		},

		calculationTotal: (state) => {
			let amount = 0;
			let total = 0;
			state.cartItems.forEach((item) => {
				amount += item.price;
				total += item.qty * item.price
			});
			state.amount = amount;
			state.total = total;

			console.log("total", total);
		}



	}
})
export const { handleReset, handleSubmit, handleChange, removeItems, increments, decrements, calculationTotal } = cartSlice.actions;
export default cartSlice.reducer;
// console.log("cartSlice", cartSlice);