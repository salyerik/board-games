import { iBreadLink } from "./commonTypes";

type tAboutUsItem = {
	id: number,
	label: string,
	text: string,
	images: string[],
}

export interface iAboutUsState {
	links: iBreadLink[],
	items: tAboutUsItem[]
}