import { iCardProduct } from "./commonTypes"

export interface getProductsArg {
	isOnlyStocked: boolean,
	fromPrice: string,
	toPrice: string,
	selectedAge: string,
	fromPlayers: string,
	toPlayers: string,
	category: string,
	subCategory: string,
	sortPrice: string,
	page: number,
	pageLimit: number
}

export interface iProductsState {
	items: iCardProduct[],
	questions: iQuestion[]
}

export interface iQuestion {
	id?: number,
	title: string,
	text: string,
	isActive?: boolean
}