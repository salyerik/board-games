import { iGetCartTotal } from "../types/cartPageTypes"

export function getCartTotal({ state, action, method }: iGetCartTotal) {
	switch (method) {
		case 'minus':
			state.price.withDiscount += - action.payload.newPrice
			state.price.withoutDiscount += - action.payload.oldPrice
			break
		case 'plus':
			++state.totalQuantity
			state.price.withDiscount += + action.payload.newPrice
			state.price.withoutDiscount += + action.payload.oldPrice
			break
	}
	localStorage.setItem('cartStrg', JSON.stringify(state))
}