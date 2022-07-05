export interface iRangeValue {
	from: string,
	to: string,
	minMaxRange: number[],
	valueGap: number,
	step: number
}

type tAgeItem = { name: string, value: string }

export type tCategory = {
	name: string,
	path: string,
	subCategories?: {
		name: string,
		path: string
	}[]
}

export interface iFilterCategoryState {
	isOnlyStocked: boolean,
	isLoadingProducts: boolean,
	price: iRangeValue,
	players: iRangeValue,
	ageItems: tAgeItem[],
	selectedAge: string,
	isSpoilerActive: {
		categoriesFilter: boolean
		priceFilter: boolean,
		ageFilter: boolean,
		playersFilter: boolean,
	},
	categories: tCategory[],
	category: string,
	subCategory: string | null,
	sortPrice: string,
	page: number,
	totalItem: number,
	pageLimit: number
}
