import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { iCartPageState, iPayloadAction } from "../../types/cartPageTypes"

const initialState: iCartPageState = {
	addedItems: [],
	price: {
		withDiscount: 0,
		withoutDiscount: 0
	},
	totalQuantity: 0
}

const cartPageSlice = createSlice({
	name: 'cartPageSlice',
	initialState,
	reducers: {
		addCartItem(state, action: PayloadAction<iPayloadAction>) {
			const itemIndex = state.addedItems
				.findIndex(item => item[action.payload.id])
			if (itemIndex === -1) {
				state.addedItems.push({
					[action.payload.id]: 1
				})
			} else {
				state.addedItems[itemIndex] = {
					[action.payload.id]: ++state.addedItems[itemIndex][action.payload.id]
				}
			}
			state.totalQuantity = ++state.totalQuantity
			state.price.withDiscount =
				state.price.withDiscount + action.payload.newPrice
			state.price.withoutDiscount =
				state.price.withoutDiscount + action.payload.oldPrice
		},
		decrementCartItem(state, action: PayloadAction<iPayloadAction>) {
			const itemIndex = state.addedItems.findIndex(item => item[action.payload.id])
			let quantity = state.addedItems[itemIndex][action.payload.id]
			if (quantity > 1) {
				state.addedItems[itemIndex] = {
					[action.payload.id]: --quantity
				}
			}
			state.totalQuantity = --state.totalQuantity
			state.price.withDiscount =
				state.price.withDiscount - action.payload.newPrice
			state.price.withoutDiscount =
				state.price.withoutDiscount - action.payload.oldPrice
		},
		removeCartItem(state, action: PayloadAction<iPayloadAction>) {
			state.addedItems = state.addedItems
				.filter(item => !item[action.payload.id])
			if (action.payload.itemQuantity) {
				state.totalQuantity = state.totalQuantity - action.payload.itemQuantity
			}
			state.price.withDiscount =
				state.price.withDiscount - action.payload.newPrice
			state.price.withoutDiscount =
				state.price.withoutDiscount - action.payload.oldPrice
		},
		setCartState(state, action: PayloadAction<iCartPageState>) {
			state.addedItems = action.payload.addedItems
			state.price = action.payload.price
			state.totalQuantity = action.payload.totalQuantity
		}
	}
})

export default cartPageSlice.reducer
export const {
	addCartItem, removeCartItem, decrementCartItem, setCartState
} = cartPageSlice.actions