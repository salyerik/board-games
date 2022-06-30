import { combineReducers, configureStore } from "@reduxjs/toolkit"

import filterCategorySlice from "./slices/filterCategorySlice"
import headerSlice from "./slices/headerSlice"
import productsSlice from "./slices/productsSlice"
import cartPageSlice from "./slices/cartPageSlice"

const rootReducer = combineReducers({
	header: headerSlice,
	filterCategory: filterCategorySlice,
	products: productsSlice,
	cartPage: cartPageSlice
})

const store = configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store