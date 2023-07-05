import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import { setPage } from '../../../../store/slices/filter-slice';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import useAppDispatch from '../../../../hooks/useAppDispatch';

import s from './Pagination.module.sass';
import IconsSVG from '../../../UI/IconsSVG';

const Pagination: FC<{ topHeight: number }> = ({ topHeight }) => {
	const dispatch = useAppDispatch();
	const { pageLimit, page } = useTypedSelector(state => state.filterCategory);
	const { count } = useTypedSelector(state => state.products);
	const [totalPages, setTotalPages] = useState<number[]>([]);

	useEffect(() => {
		countTotalPage();
		dispatch(setPage(1));
	}, [count]);

	function countTotalPage() {
		const arr = [];
		for (let index = 1; index <= Math.ceil(count / pageLimit); index++) {
			arr.push(index);
		}
		setTotalPages(arr);
	}

	function handleChangePage(p: number) {
		dispatch(setPage(p));
		window.scrollTo(0, topHeight);
	}

	if (!count) {
		return <h1>No Pagination</h1>;
	}

	return (
		<section className={s.wrapper}>
			<button
				className={s.arrowLeft}
				onClick={() => page > 1 && handleChangePage(page - 1)}>
				<IconsSVG id='arrowSpoiler' />
			</button>
			<div className={s.pagesNumber}>
				{totalPages
					.filter(p => p < page + 4 && p > page - 4)
					.map(p => (
						<button
							key={p}
							onClick={() => handleChangePage(p)}
							className={cn(s.pageNumber, {
								[s.pageNumber_active]: p === page,
							})}>
							{p}
						</button>
					))}
			</div>
			<button
				className={s.arrowRight}
				onClick={() => page < totalPages.length && handleChangePage(page + 1)}>
				<IconsSVG id='arrowSpoiler' />
			</button>
		</section>
	);
};

export default Pagination;
