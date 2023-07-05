import { ILink } from './common-type';

export interface ISearchedItem {
	id: string;
	name: string;
	img: string;
	price: number;
}

export interface IHeaderState {
	isMenuActive: boolean;
	links: ILink[];
	images: {
		logo: string;
		humanIcon: string;
		cart: string;
		phone: string;
		search: string;
	};
	searchedItems: ISearchedItem[];
}
