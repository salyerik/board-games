import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICardProduct } from '../../types/common-type';
import { IProductsState } from '../../types/products-type';

const initialState: IProductsState = {
	catalogItems: [],
	mainPageItems: [],
	count: 0,
	questions: [
		{
			id: 1,
			title: 'How to choose a board game?',
			text: 'Our store offers a huge range of games for all tastes, but of course there are the timeless classics of board games. If you\'re just starting your gaming journey, we recommend the legendary "Monopoly", the famous party game called "Activiti", the world\'s most popular board strategies "Carcassonne" and "Colonizers", a simple and fun game that\'s impossible to tear yourself away from, "Jenga',
		},
		{
			id: 2,
			title: 'What games can you advise a newcomer to board games?',
			text: 'Our store offers a huge range of games for all tastes, but of course there are the timeless classics of board games. If you\'re just starting your gaming journey, we recommend the legendary "Monopoly", the famous party game called "Activiti", the world\'s most popular board strategies "Carcassonne" and "Colonizers", a simple and fun game that\'s impossible to tear yourself away from, "Jenga',
		},
		{
			id: 3,
			title: 'What are the most popular games right now?',
			text: 'Our store offers a huge range of games for all tastes',
		},
		{
			id: 4,
			title: 'Is it possible to see the game live?',
			text: 'But of course there are the timeless classics of board games. If you\'re just starting your gaming journey, we recommend the legendary "Monopoly", the famous party game called "Activiti", the world\'s most popular board strategies "Carcassonne" and "Colonizers", a simple and fun game that is impossible to tear yourself away from, "Jenga',
		},
		{
			id: 5,
			title: 'Are there any games with discounts?',
			text: 'In our store there is a huge range of games for every taste, we recommend the legendary "Monopoly", the famous party game called "Activiti", the world\'s most popular board strategy "Carcassonne" and "Colonizers", simple and fun game, from which it is impossible to break away, "Jenga',
		},
		{
			id: 6,
			title: 'How do I choose a game for my child?',
			text: 'Games for all tastes, but of course there are the timeless classics of board games. If you\'re just starting your gaming journey, we recommend the legendary "Monopoly", the famous party game called "Activiti", the world\'s most popular board strategies "Carcassonne" and "Colonizers", a simple and fun game that\'s impossible to break away from, "Jenga',
		},
	],
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setCatalogItems: (state, action: PayloadAction<ICardProduct[]>) => {
			state.catalogItems = action.payload;
		},
		setMainPageItems: (state, action: PayloadAction<ICardProduct[]>) => {
			state.mainPageItems = action.payload;
		},
		setTotalCount: (state, action: PayloadAction<number>) => {
			state.count = action.payload;
		},
	},
});

export default productsSlice.reducer;
export const { setCatalogItems, setMainPageItems, setTotalCount } =
	productsSlice.actions;
