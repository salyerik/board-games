import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { resetFilter } from '../../../../store/slices/filter-slice';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import AgeFilter from './AgeFilter';
import AllCategories from './AllCategories';
import PriceFilter from './PriceFilter';
import PlayersQuantity from './PlayersQuantity';

import s from './AsideCategory.module.sass';

const AsideCategory: FC<{ resetSort: () => void }> = ({ resetSort }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	function handleResetBtn() {
		dispatch(resetFilter());
		resetSort();
		navigate('/board-games/catalog');
	}

	return (
		<section className={s.wrapper}>
			<AllCategories />
			<PriceFilter />
			<AgeFilter />
			{/* <InStock /> */}
			<PlayersQuantity />
			<input
				className={s.btn}
				type='button'
				value='Reset filter'
				onClick={handleResetBtn}
			/>
		</section>
	);
};

export default AsideCategory;
