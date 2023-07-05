import { IGetCartTotal } from '../types/cart-type';

export function getCartTotal({ state, action, method }: IGetCartTotal) {
	switch (method) {
		case 'minus':
			state.price.withDiscount += -action.payload.newPrice;
			state.price.withoutDiscount += -action.payload.oldPrice;
			break;
		case 'plus':
			++state.totalQuantity;
			state.price.withDiscount += +action.payload.newPrice;
			state.price.withoutDiscount += +action.payload.oldPrice;
			break;
	}
	localStorage.setItem('cartStrg', JSON.stringify(state));
}
