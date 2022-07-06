import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { iFilterCategoryState } from "../../types/filterCategoryTypes"

const initialState: iFilterCategoryState = {
	isOnlyStocked: false,
	isLoadingProducts: false,
	price: {
		from: '0',
		to: '1000',
		minMaxRange: [0, 1000],
		valueGap: 50,
		step: 10,
	},
	ageItems: [
		{ name: 'Без ограничений', value: '' },
		{ name: '3-х', value: '3' },
		{ name: '7-ми', value: '7' },
		{ name: '13-ти', value: '13' },
		{ name: '18-ти', value: '18' },
	],
	selectedAge: '',
	players: {
		from: '1',
		to: '6',
		minMaxRange: [1, 6],
		valueGap: 1,
		step: 1,
	},
	isSpoilerActive: {
		priceFilter: false,
		categoriesFilter: false,
		ageFilter: false,
		playersFilter: false,
	},
	categories: [
		{
			name: 'Настольные игры', path: 'board', subCategories: [
				{ name: 'Детективные', path: 'board/detective' },
				{ name: 'Детские', path: 'board/childrens' },
				{ name: 'Кооперативные', path: 'board/cooperative' },
				{ name: 'Приключенческие', path: 'board/adventure' },
				{ name: 'Стратегические', path: 'board/strategic' },
				{ name: 'Хардкорные', path: 'board/hardcore' },
				{ name: 'Экономические', path: 'board/economic' },
			]
		},
		{ name: 'Аксессуaры для игр', path: 'accessories' },
		{
			name: 'Краски', path: 'paints', subCategories: [
				{ name: 'Citadel', path: 'paints/citadel' },
				{ name: 'Bosny', path: 'paints/bosny' },
				{ name: 'Vallejo', path: 'paints/vallejo' },
				{ name: 'Zip Maket', path: 'paints/zip-maket' },
			]
		},
		{ name: 'Товары для детей', path: 'goods-for-children' },
		{ name: 'Аксессуары для моделизма', path: 'modeling-accessories' },
	],
	category: '',
	subCategory: '',
	sortPrice: '',
	page: 1,
	pageLimit: 6,
	totalItem: 0,
}

const filterCategorySlice = createSlice({
	name: 'filterCategorySlice',
	initialState,
	reducers: {
		setFromPrice: (state, action: PayloadAction<string>) => {
			if (Number(action.payload) < 1000) {
				state.price.from = action.payload
			} else {
				state.price.from = '1000'
			}
		},
		setToPrice: (state, action: PayloadAction<string>) => {
			if (Number(action.payload) < 1000) {
				state.price.to = action.payload
			} else {
				state.price.to = '1000'
			}
		},
		toggleOnlyStocked: (state) => {
			state.isOnlyStocked = !state.isOnlyStocked
		},
		setFromPlayers: (state, action: PayloadAction<string>) => {
			state.players.from = action.payload
		},
		setToPlayers: (state, action: PayloadAction<string>) => {
			state.players.to = action.payload
		},
		setAge: (state, action: PayloadAction<string>) => {
			state.selectedAge = action.payload
		},
		resetFilter: (state) => {
			state.price.from = '0'
			state.price.to = '1000'
			state.players.from = '1'
			state.players.to = '6'
			state.isOnlyStocked = false
			state.selectedAge = ''
			state.isSpoilerActive.ageFilter = false
			state.isSpoilerActive.categoriesFilter = false
			state.isSpoilerActive.playersFilter = false
			state.isSpoilerActive.priceFilter = false
		},
		toggleCategoriesSpoiler: (state, action: PayloadAction<boolean>) => {
			state.isSpoilerActive.categoriesFilter = action.payload
		},
		togglePriceSpoiler: (state) => {
			state.isSpoilerActive.priceFilter =
				!state.isSpoilerActive.priceFilter
		},
		togglePlayesSpoiler: (state) => {
			state.isSpoilerActive.playersFilter =
				!state.isSpoilerActive.playersFilter
		},
		toggleAgeSpoiler: (state) => {
			state.isSpoilerActive.ageFilter =
				!state.isSpoilerActive.ageFilter
		},
		setCategory: (state, action: PayloadAction<string>) => {
			state.category = action.payload
		},
		setSubCategory: (state, action: PayloadAction<string>) => {
			state.subCategory = action.payload
		},
		setSortPrice: (state, action: PayloadAction<string>) => {
			state.sortPrice = action.payload
		},
		setTotalItem: (state, action: PayloadAction<number>) => {
			state.totalItem = action.payload
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
		toggleLoadingProducts: (state, action: PayloadAction<boolean>) => {
			state.isLoadingProducts = action.payload
		}
	}
})

export default filterCategorySlice.reducer
export const {
	setFromPrice, setToPrice, toggleOnlyStocked, setFromPlayers, setToPlayers,
	setAge, resetFilter, toggleCategoriesSpoiler, togglePriceSpoiler,
	togglePlayesSpoiler, toggleAgeSpoiler, setCategory, setSubCategory,
	setSortPrice, setTotalItem, setPage, toggleLoadingProducts
} = filterCategorySlice.actions