import { ICardProduct } from './common-type';

type tSlide = {
	id: number;
	image: string;
	title: string;
	subTitle: string;
};

export interface IMainPageState {
	slides: tSlide[];
	aboutUs: string[];
	arrow: string;
	images: string[];
}

export interface ISpecialOffersProps {
	title: string;
	items: ICardProduct[];
	arrows: string[];
}
