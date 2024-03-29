import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterCategoryState } from '../../types/filter-type';

const initialState: IFilterCategoryState = {
	isOnlyStocked: false,
	isLoadingProducts: false,
	price: {
		from: '10',
		to: '1000',
		minMaxRange: [10, 1000],
		valueGap: 10,
		step: 10,
	},
	ageItems: [
		{ name: 'No restrictions', value: '' },
		{ name: '3th', value: '3' },
		{ name: '7th', value: '7' },
		{ name: '13th', value: '13' },
		{ name: '18th', value: '18' },
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
			name: 'Board games',
			path: 'board',
			subCategories: [
				{ name: 'Detective', path: 'board/detective' },
				{ name: 'Children', path: 'board/children' },
				{ name: 'Cooperative', path: 'board/cooperative' },
				{ name: 'Adventure', path: 'board/adventure' },
				{ name: 'Strategic', path: 'board/strategic' },
				{ name: 'Hardcore', path: 'board/hardcore' },
				{ name: 'Economic', path: 'board/economic' },
			],
		},
		{ name: 'Accessories', path: 'accessories' },
		{
			name: 'Paints',
			path: 'paints',
			subCategories: [
				{ name: 'Citadel', path: 'paints/citadel' },
				{ name: 'Bosny', path: 'paints/bosny' },
				{ name: 'Vallejo', path: 'paints/vallejo' },
				{ name: 'Zip Maket', path: 'paints/zip-maket' },
			],
		},
		{ name: 'Goods for children', path: 'goods-for-children' },
		{ name: 'Modeling accessories', path: 'modeling-accessories' },
	],
	category: '',
	subCategory: '',
	sortPrice: '',
	page: 1,
	pageLimit: 6,
};

const filterCategorySlice = createSlice({
	name: 'filterCategorySlice',
	initialState,
	reducers: {
		setFromPrice: (state, action: PayloadAction<string>) => {
			if (Number(action.payload) < 1000) {
				state.price.from = action.payload;
			} else {
				state.price.from = '1000';
			}
		},
		setToPrice: (state, action: PayloadAction<string>) => {
			if (Number(action.payload) < 1000) {
				state.price.to = action.payload;
			} else {
				state.price.to = '1000';
			}
		},
		toggleOnlyStocked: state => {
			state.isOnlyStocked = !state.isOnlyStocked;
		},
		setFromPlayers: (state, action: PayloadAction<string>) => {
			state.players.from = action.payload;
		},
		setToPlayers: (state, action: PayloadAction<string>) => {
			state.players.to = action.payload;
		},
		setAge: (state, action: PayloadAction<string>) => {
			state.selectedAge = action.payload;
		},
		resetFilter: state => {
			state.price.from = '10';
			state.price.to = '1000';
			state.players.from = '1';
			state.players.to = '6';
			state.isOnlyStocked = false;
			state.selectedAge = '';
			state.isSpoilerActive.ageFilter = false;
			state.isSpoilerActive.categoriesFilter = false;
			state.isSpoilerActive.playersFilter = false;
			state.isSpoilerActive.priceFilter = false;
			state.sortPrice = '';
		},
		toggleCategoriesSpoiler: (state, action: PayloadAction<boolean>) => {
			state.isSpoilerActive.categoriesFilter = action.payload;
		},
		togglePriceSpoiler: state => {
			state.isSpoilerActive.priceFilter = !state.isSpoilerActive.priceFilter;
		},
		togglePlayersSpoiler: state => {
			state.isSpoilerActive.playersFilter =
				!state.isSpoilerActive.playersFilter;
		},
		toggleAgeSpoiler: state => {
			state.isSpoilerActive.ageFilter = !state.isSpoilerActive.ageFilter;
		},
		setCategory: (state, action: PayloadAction<string>) => {
			state.category = action.payload;
		},
		setSubCategory: (state, action: PayloadAction<string>) => {
			state.subCategory = action.payload;
		},
		setSortPrice: (state, action: PayloadAction<string>) => {
			state.sortPrice = action.payload;
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		toggleLoadingProducts: (state, action: PayloadAction<boolean>) => {
			state.isLoadingProducts = action.payload;
		},
	},
});

export default filterCategorySlice.reducer;
export const {
	setFromPrice,
	setToPrice,
	toggleOnlyStocked,
	setFromPlayers,
	setToPlayers,
	setAge,
	resetFilter,
	toggleCategoriesSpoiler,
	togglePriceSpoiler,
	togglePlayersSpoiler,
	toggleAgeSpoiler,
	setCategory,
	setSubCategory,
	setSortPrice,
	setPage,
	toggleLoadingProducts,
} = filterCategorySlice.actions;
