import axios from 'axios';

import { ICardProduct } from '../types/common-type';
import { getFilteredProductsArg, getProductsArg } from '../types/products-type';
import { API } from '../utils/constants';

export const getProducts = async ({ page, pageLimit }: getProductsArg) => {
	const PAGINATION = page ? `?page=${page}&limit=${pageLimit}` : '';
	return await axios.get<ICardProduct[]>(`${API}${PAGINATION}`);
};

export const getFilteredProducts = async ({
	isOnlyStocked,
	price,
	selectedAge,
	players,
	category,
	subCategory,
	sortPrice,
	page,
	pageLimit,
}: getFilteredProductsArg) => {
	const PAGINATION = page ? `?page=${page}&limit=${pageLimit}` : '';
	const PRICE_RANGE =
		(price && +price.from !== 10) || (price && +price.to !== 1000)
			? `&priceGte=${price?.from}&priceLte=${price?.to}`
			: '';
	const PLAYERS_RANGE =
		(players && +players.from !== 1) || (players && +players.to !== 6)
			? `&peopleGte=${players.from}&peopleLte=${players.to}`
			: '';
	const ONLYSTOCKED = isOnlyStocked ? '&stocks=true' : '';
	const AGE = selectedAge ? `&age=${selectedAge}` : '';
	const CATEGORY = category ? `&category=${category}` : '';
	const SUBCATEGORY = subCategory ? `&subCategory=${subCategory}` : '';
	const SORT_PRICE = sortPrice ? `&sort=${sortPrice}` : '';

	return await axios.get<{ products: ICardProduct[]; count: string }>(
		`${API}${PAGINATION}${PRICE_RANGE}${AGE}${ONLYSTOCKED}
		${PLAYERS_RANGE}${CATEGORY}${SUBCATEGORY}${SORT_PRICE}`,
	);
};

export const getProduct = async (id: string) =>
	await axios.get<ICardProduct>(API + '/' + id);
export const findItem = async (value: string) => {
	return await axios.get<ICardProduct[]>(API + '-search' + `?search=${value}`);
};
