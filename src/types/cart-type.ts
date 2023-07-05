import { PayloadAction } from '@reduxjs/toolkit';

export interface ICartPageState {
	addedItems: Array<{
		[key: string]: number;
	}>;
	price: {
		withDiscount: number;
		withoutDiscount: number;
	};
	totalQuantity: number;
}

export interface IPayloadAction {
	id: string;
	newPrice: number;
	oldPrice: number;
	itemQuantity?: number;
}

export interface IGetCartTotal {
	state: ICartPageState;
	action: PayloadAction<IPayloadAction>;
	method: 'minus' | 'plus';
}
