import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHeaderState, ISearchedItem } from '../../types/header-type';

const initialState: IHeaderState = {
	isMenuActive: false,
	links: [
		{ title: 'Catalog', path: '/board-games/catalog' },
		{ title: 'Events', path: '/board-games/events' },
		{ title: 'Blog', path: '/board-games/blog' },
		{ title: 'About us', path: '/board-games/about-us' },
	],
	images: {
		logo: 'https://i.ibb.co/sHwc8GH/logo.png',
		humanIcon: 'humanHeader',
		cart: 'cartHeader',
		phone: 'phoneHeader',
		search: 'searchHeader',
	},
	searchedItems: [],
};

const headerSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {
		toggleActiveMenu(state) {
			state.isMenuActive = !state.isMenuActive;
		},
		setSearchedItems: (state, action: PayloadAction<ISearchedItem[]>) => {
			state.searchedItems = action.payload;
		},
	},
});

export default headerSlice.reducer;
export const { toggleActiveMenu, setSearchedItems } = headerSlice.actions;
