import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { getProducts } from '../../http/get-products';
import { setMainPageItems } from '../slices/products-slice';

const getProductsThunk = createAsyncThunk(
	'products/getProductsThunk',
	async (_, { dispatch }) => {
		try {
			const res = await getProducts({});
			if (res.status !== 200) {
				throw new Error('Server Error');
			}
			dispatch(setMainPageItems(res.data));
		} catch (error) {
			const err = error as Error | AxiosError;
			console.log(err.message);
		}
	},
);

export default getProductsThunk;
