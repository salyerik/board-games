import { iDate } from "./eventsTypes"
import { iFooterState } from "./footerTypes"

export interface iSocialNet {
	img: string,
	path: string,
	modalImg?: string
}

export interface iBreadLink {
	name: string,
	path: string
}

export interface iLink {
	title: string,
	path: string
}

interface iPrice { new: number, old: number | null }

export interface iCardImages {
	original: string,
	compressed: string
}

export interface iCardProduct {
	id: string,
	img: iCardImages,
	discount: number | null,
	people: number[],
	timer: number[],
	age: number,
	name: string,
	price: iPrice,
	specialOffers: boolean,
	stocks: boolean,
	isProductPage?: true,
}

export interface iContactLink {
	text: string,
	path: string,
}

type tCatalog = {
	id: number,
	img: string,
	name: string,
	path: string
}

export interface iCommonState {
	footer: iFooterState,
	phoneNumber: iContactLink,
	mail: iContactLink,
	catalogs: tCatalog[],
	address: {
		country: string,
		state: string,
		city: string,
		street: string,
	},
	workMode: {
		from: string,
		to: string,
		days: string,
	},
	socialNets: iSocialNet[]
}

export interface iItemInfoCardProps {
	link: string,
	img: string,
	title: string,
	text: string,
	date?: iDate,
	price?: number,
	isActivePage?: true
}
