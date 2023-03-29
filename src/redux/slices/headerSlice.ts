import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { iHeaderState, iSearchedItem } from '../../types/headerTypes'

const initialState: iHeaderState = {
	isMenuActive: false,
	links: [
		{ title: 'Catalog', path: '/boardGames/catalog' },
		{ title: 'Events', path: '/boardGames/events' },
		{ title: 'Blog', path: '/boardGames/blog' },
		{ title: 'About us', path: '/boardGames/about-us' }
	],
	images: {
		logo: 'https://i.ibb.co/sHwc8GH/logo.png',
		humanIcon: 'humanHeader',
		cart: 'cartHeader',
		phone: 'phoneHeader',
		search: 'searchHeader'
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
