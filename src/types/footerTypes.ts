import { iContactLink, iLink } from "./commonTypes";

export interface iFooterTop {
	links: iLink[],
	mail: iContactLink,
	phone: iContactLink,
}

export interface iFooterState {
	links: iLink[],
	images: string[]
}