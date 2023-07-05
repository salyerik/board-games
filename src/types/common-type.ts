import { IAboutUsItem } from './about-type';
import { IBlogsState } from './blog-type';
import { IDate, IEventsPageState } from './events-type';
import { IFooterState } from './footer-type';
import { IMainPageState } from './main-type';

export interface ISocialNet {
	img: string;
	path: string;
	modalImg?: string;
}

export interface IBreadLink {
	name: string;
	path?: string;
}

export interface IBreadProps {
	links?: IBreadLink[];
	text?: string;
}

export interface ILink {
	title: string;
	path: string;
}

interface IPrice {
	new: number;
	old: number | null;
}

export interface ICardImages {
	original: string;
	compressed: string;
}

export interface ICardProduct {
	_id: string;
	img: ICardImages;
	discount: number | null;
	people: number[];
	timer: number[];
	age: number;
	name: string;
	price: IPrice;
	specialOffers: boolean;
	stocks: boolean;
	isProductPage?: true;
}

export interface IContactLink {
	text: string;
	path: string;
}

type tCatalog = {
	id: number;
	img: string;
	name: string;
	path: string;
};

export interface ICommonData {
	footer: IFooterState;
	phoneNumber: IContactLink;
	mail: IContactLink;
	catalogs: tCatalog[];
	address: {
		country: string;
		state: string;
		city: string;
		street: string;
	};
	workMode: {
		from: string;
		to: string;
		days: string;
	};
	socialNets: ISocialNet[];
}

export interface IItemInfoCardProps {
	link: string;
	img: string;
	title: string;
	text: string;
	date?: IDate;
	price?: number;
	isActivePage?: true;
}

export interface ICommonSliceState {
	aboutUsPage: IAboutUsItem[];
	blogPage: IBlogsState;
	eventsPage: IEventsPageState;
	commonData: ICommonData;
	mainPage: IMainPageState;
}
