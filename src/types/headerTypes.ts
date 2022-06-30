import { iLink } from "./commonTypes"

export interface iSearchedItem {
	id: string,
	name: string,
	img: string,
	price: number
}

export interface iHeaderState {
	isMenuActive: boolean,
	links: iLink[],
	images: {
		logo: string,
		humanIcon: string,
		cart: string,
		phone: string,
		search: string
	},
	searchedItems: iSearchedItem[]
}