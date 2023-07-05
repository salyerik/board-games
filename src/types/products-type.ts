import { ICardProduct } from './common-type';

type tRange = { to: string; from: string };

export interface getProductsArg {
	page?: number;
	pageLimit?: number;
}

export interface getFilteredProductsArg {
	isOnlyStocked?: boolean;
	price?: tRange;
	selectedAge?: string;
	players?: tRange;
	category?: string;
	subCategory?: string | null;
	sortPrice?: string;
	page?: number;
	pageLimit?: number;
}

export interface IProductsState {
	catalogItems: ICardProduct[];
	mainPageItems: ICardProduct[];
	questions: IQuestion[];
	count: number;
}

export interface IQuestion {
	id?: number;
	title: string;
	text: string;
	isActive?: boolean;
}
