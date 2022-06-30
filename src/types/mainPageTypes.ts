import { iCardProduct } from "./commonTypes"

type tSlide = {
	id: number,
	image: string,
	title: string,
	subTitle: string
}

export interface iMainPageState {
	slides: tSlide[],
	aboutUs: string[],
	arrow: string,
	images: string[]
}

export interface iSpecialOffersProps {
	title: string,
	items: iCardProduct[],
	arrows: string[]
}