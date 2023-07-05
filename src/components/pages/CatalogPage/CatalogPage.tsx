import { FC, useEffect, useRef } from 'react';

import { getFilteredProducts } from '../../../http/get-products';
import {
	setSortPrice,
	toggleLoadingProducts,
} from '../../../store/slices/filter-slice';
import {
	setCatalogItems,
	setTotalCount,
} from '../../../store/slices/products-slice';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useTypedSelector from '../../../hooks/useTypedSelector';

import AsideCategory from './AsideCategory';
import Products from './Products';
import Top from './Top';
import Pagination from './Pagination';
import BreadCrumps from '../../UI/BreadCrumps';
import Questions from '../../UI/Questions';

import s from './CatalogPage.module.sass';
import IconsSVG from '../../UI/IconsSVG';

const Catalog: FC = () => {
	const dispatch = useAppDispatch();
	const topRef = useRef<HTMLDivElement>(null);
	const selectRef = useRef<HTMLSelectElement>(null);
	const {
		isOnlyStocked,
		price,
		selectedAge,
		players,
		category,
		subCategory,
		sortPrice,
		page,
		pageLimit,
	} = useTypedSelector(state => state.filterCategory);

	useEffect(() => {
		dispatch(toggleLoadingProducts(true));
		getFilteredProducts({
			isOnlyStocked,
			price,
			selectedAge,
			players,
			category,
			subCategory,
			sortPrice,
			page,
			pageLimit,
		})
			.then(res => {
				dispatch(setTotalCount(+res.data.count));
				dispatch(setCatalogItems(res.data.products));
			})
			.catch(e => {
				console.log(e.message);
			})
			.finally(() => {
				dispatch(toggleLoadingProducts(false));
			});
	}, [
		isOnlyStocked,
		price,
		selectedAge,
		players,
		category,
		subCategory,
		sortPrice,
		page,
		pageLimit,
	]);

	function handleSort(e: React.ChangeEvent<HTMLSelectElement>) {
		dispatch(setSortPrice(e.target.value));
	}
	function resetSort() {
		if (selectRef.current) selectRef.current.selectedIndex = 0;
	}

	return (
		<>
			<Top />
			<div className='container' ref={topRef}>
				<BreadCrumps text='Catalog' />
				<div className={s.flex}>
					<h2 className={s.title}>All categories</h2>
					<div className='select'>
						<select defaultValue={''} onChange={handleSort} ref={selectRef}>
							<option value={''}>Disable Sort</option>
							<option value={'-1'}>By decreasing price</option>
							<option value={'1'}>Price ascending</option>
						</select>
						<IconsSVG id='arrowSpoiler' />
					</div>
				</div>
				<div className={s.content}>
					<aside className={s.aside}>
						<AsideCategory resetSort={resetSort} />
					</aside>
					<div className={s.products}>
						<Products />
					</div>
				</div>
				<Pagination
					topHeight={topRef.current ? topRef.current.offsetTop - 30 : 0}
				/>
				<div className={s.questionsWrapper}>
					<Questions />
				</div>
			</div>
		</>
	);
};

export default Catalog;
