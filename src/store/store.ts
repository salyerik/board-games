import { combineReducers, configureStore } from '@reduxjs/toolkit';

import filterCategorySlice from './slices/filter-slice';
import headerSlice from './slices/header-slice';
import productsSlice from './slices/products-slice';
import cartPageSlice from './slices/cart-slice';
import commonSlice from './slices/common-slice';

const rootReducer = combineReducers({
	header: headerSlice,
	filterCategory: filterCategorySlice,
	products: productsSlice,
	cartPage: cartPageSlice,
	common: commonSlice,
});

const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
