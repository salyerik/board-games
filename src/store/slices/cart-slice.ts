import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartPageState, IPayloadAction } from '../../types/cart-type';
import { getCartTotal } from '../../utils/getCartTotal';

const initialState: ICartPageState = {
	addedItems: [],
	price: { withDiscount: 0, withoutDiscount: 0 },
	totalQuantity: 0,
};

const cartPageSlice = createSlice({
	name: 'cartPageSlice',
	initialState,
	reducers: {
		addCartItem(state, action: PayloadAction<IPayloadAction>) {
			const itemIndex = state.addedItems.findIndex(
				item => item[action.payload.id],
			);
			if (itemIndex === -1) {
				state.addedItems.push({ [action.payload.id]: 1 });
			} else {
				let quantity = state.addedItems[itemIndex][action.payload.id];
				state.addedItems[itemIndex] = { [action.payload.id]: ++quantity };
			}
			getCartTotal({ state, action, method: 'plus' });
		},
		decrementCartItem(state, action: PayloadAction<IPayloadAction>) {
			const itemIndex = state.addedItems.findIndex(
				item => item[action.payload.id],
			);
			let quantity = state.addedItems[itemIndex][action.payload.id];
			if (quantity > 1) {
				state.addedItems[itemIndex] = { [action.payload.id]: --quantity };
			}
			state.totalQuantity = --state.totalQuantity;
			getCartTotal({ state, action, method: 'minus' });
		},
		removeCartItem(state, action: PayloadAction<IPayloadAction>) {
			state.addedItems = state.addedItems.filter(
				item => !item[action.payload.id],
			);
			if (action.payload.itemQuantity) {
				state.totalQuantity += -action.payload.itemQuantity;
			}
			getCartTotal({ state, action, method: 'minus' });
		},
		getCartLocalStrg() {
			const cartStrg = localStorage.getItem('cartStrg');
			if (cartStrg) return { ...JSON.parse(cartStrg) };
		},
	},
});

export default cartPageSlice.reducer;
export const {
	addCartItem,
	removeCartItem,
	decrementCartItem,
	getCartLocalStrg,
} = cartPageSlice.actions;
