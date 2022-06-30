import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { iHeaderState, iSearchedItem } from "../../types/headerTypes"

const initialState: iHeaderState = {
	isMenuActive: false,
	links: [
		{ title: 'Каталог', path: '/catalog' },
		{ title: 'Мероприятия', path: '/events' },
		{ title: 'Блог', path: '/blog' },
		{ title: 'О центре', path: '/about-us' },
	],
	images: {
		logo: "https://i.ibb.co/sHwc8GH/logo.png",
		humanIcon: "humanHeader",
		cart: "cartHeader",
		phone: "phoneHeader",
		search: "searchHeader",
	},
	searchedItems: []
}

const headerSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {
		toggleActiveMenu(state) {
			state.isMenuActive = !state.isMenuActive
		},
		setSearchedItems: (state, action: PayloadAction<iSearchedItem[]>) => {
			state.searchedItems = action.payload
		}
	}
})

export default headerSlice.reducer
export const { toggleActiveMenu, setSearchedItems } = headerSlice.actions