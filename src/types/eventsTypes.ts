import { iBreadLink } from "./commonTypes"

export interface iDate {
	day: string,
	time: string,
}

export interface iEvent {
	id: number,
	img: string,
	title: string,
	price: number,
	date: iDate,
	label: string,
	placeLeft: number
}

export interface iEventsPageState {
	items: iEvent[],
	filters: Array<{ id: string, filterText: string }>,
	links: iBreadLink[]
}

export interface EventAsideProps {
	handleModalActive: () => void,
	price: number,
	placeLeft: number,
	date: iDate
}

export interface iEventContentProps {
	day: string,
	img: string,
	text: string
}