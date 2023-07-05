export interface IDate {
	day: string;
	time: string;
}

export interface IEvent {
	id: number;
	img: string;
	title: string;
	price: number;
	date: IDate;
	label: string;
	placeLeft: number;
}

export interface IEventsPageState {
	items: IEvent[];
	filters: Array<{ id: string; filterText: string }>;
}

export interface EventAsideProps {
	handleModalActive: () => void;
	price: number;
	placeLeft: number;
	date: IDate;
}

export interface IEventContentProps {
	day: string;
	img: string;
	text: string;
}
