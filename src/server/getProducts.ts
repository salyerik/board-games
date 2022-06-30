import axios from "axios"
import { iCardProduct } from "../types/commonTypes"
import { getProductsArg } from "../types/productsType"

const URL = 'http://localhost:3001/products/'

export const getProducts = async ({
	isOnlyStocked, fromPrice, toPrice, selectedAge, fromPlayers, toPlayers,
	category, subCategory, sortPrice, page, pageLimit
}: getProductsArg) => {
	const PAGINATION = `?_page=${page}&_limit=${pageLimit}`
	const ONLYSTOCKED = isOnlyStocked ? '&stocks=true' : ''
	const PRICE_RANGE = `&price.new_gte=${fromPrice}&price.new_lte=${toPrice}`
	const PLAYERS_RANGE = `&people.0_gte=${fromPlayers}&people.1_lte=${toPlayers}`
	const AGE = selectedAge ? `&age=${selectedAge}` : ''
	const CATEGORY = category ? `&category=${category}` : ''
	const SUBCATEGORY = subCategory ? `&subCategory=${subCategory}` : ''
	const SORT_PRICE = sortPrice ? `&_sort=price.new&_order=${sortPrice}` : ''

	return await axios.get<iCardProduct[]>(
		URL + `${PAGINATION}${ONLYSTOCKED}${PRICE_RANGE}${AGE}${PLAYERS_RANGE}${CATEGORY}${SUBCATEGORY}${SORT_PRICE}`
	)
}

export const getProduct = async (id: string) => {
	const res = await axios.get<iCardProduct>(URL + id)
	return res.data
}

export const findItem = async (value: string) => {
	const res = await axios.get<iCardProduct[]>(URL + `?q=${value}`)
	return res.data
}