export interface iBlog {
	id: number,
	img: string,
	title: string,
	text: string,
	linkName: string,
	date: string,
	label: string
}

type tBlogCommon = {
	id: number,
	title: string,
	text: string
	img: string,
}

export interface iBlogsState {
	items: iBlog[],
	filters: Array<{
		id: string,
		filterText: string
	}>,
	interesting: tBlogCommon[],
	texts: Array<{
		id: number,
		label: string,
		text: string
	}>,
	learnMore: tBlogCommon[]
}