import axios from "axios"

import { iCardProduct } from "../types/commonTypes"
import { getProductsArg } from "../types/productsType"
import { DATA_BASE_URL } from "../utils/constants"

export const getProducts = async ({
	isOnlyStocked, price, selectedAge, players, category,
	subCategory, sortPrice, page = 1, pageLimit = 22
}: getProductsArg) => {
	const PAGINATION = `?_page=${page}&_limit=${pageLimit}`
	const PRICE_RANGE = price ?
		`&price.new_gte=${price.from}&price.new_lte=${price.to}` : ''
	const PLAYERS_RANGE = players ?
		`&people.0_gte=${players.from}&people.1_lte=${players.to}` : ''
	const ONLYSTOCKED = isOnlyStocked ? '&stocks=true' : ''
	const AGE = selectedAge ? `&age=${selectedAge}` : ''
	const CATEGORY = category ? `&category=${category}` : ''
	const SUBCATEGORY = subCategory ? `&subCategory=${subCategory}` : ''
	const SORT_PRICE = sortPrice ? `&_sort=price.new&_order=${sortPrice}` : ''

	return await axios.get<iCardProduct[]>(
		DATA_BASE_URL + `${PAGINATION}${PRICE_RANGE}${AGE}${ONLYSTOCKED}
		${PLAYERS_RANGE}${CATEGORY}${SUBCATEGORY}${SORT_PRICE}`
	)
}

export const getProduct = async (id: string) => {
	const res = await axios.get<iCardProduct>(DATA_BASE_URL + id)
	return res.data
}

export const findItem = async (value: string) => {
	const res = await axios.get<iCardProduct[]>(DATA_BASE_URL + `?q=${value}`)
	return res.data
}