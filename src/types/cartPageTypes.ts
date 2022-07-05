import { PayloadAction } from "@reduxjs/toolkit"

export interface iCartPageState {
	addedItems: Array<{
		[key: string]: number
	}>,
	price: {
		withDiscount: number,
		withoutDiscount: number
	},
	totalQuantity: number
}

export interface iPayloadAction {
	id: string,
	newPrice: number,
	oldPrice: number,
	itemQuantity?: number
}

export interface iGetCartTotal {
	state: iCartPageState,
	action: PayloadAction<iPayloadAction>,
	method: 'minus' | 'plus'
}