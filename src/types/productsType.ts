import { iCardProduct } from './commonTypes'

type tRange = { to: string; from: string }

export interface getProductsArg {
	page?: number
	pageLimit?: number
}

export interface getFilteredProductsArg {
	isOnlyStocked?: boolean
	price?: tRange
	selectedAge?: string
	players?: tRange
	category?: string
	subCategory?: string | null
	sortPrice?: string
	page?: number
	pageLimit?: number
}

export interface iProductsState {
	catalogItems: iCardProduct[]
	mainPageItems: iCardProduct[]
	questions: iQuestion[]
	count: number
}

export interface iQuestion {
	id?: number
	title: string
	text: string
	isActive?: boolean
}
