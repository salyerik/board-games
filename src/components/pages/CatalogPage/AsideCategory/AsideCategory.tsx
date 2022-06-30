import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { resetFilter } from '../../../../redux/slices/filterCategorySlice'
import useAppDispatch from '../../../../hooks/useAppDispatch'
import AgeFilter from './AgeFilter'
import AllCategories from './AllCategories'
import PriceFilter from './PriceFilter'
import PlayersQuantity from './PlayersQuantity'

import s from './AsideCategory.module.sass'

const AsideCategory: FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	function handleResetBtn() {
		dispatch(resetFilter())
		navigate('/catalog')
	}

	return (
		<section className={s.wrapper}>
			<AllCategories />
			<PriceFilter />
			<AgeFilter />
			{/* <InStock /> */}
			<PlayersQuantity />
			<input
				className={s.btn} type="button" value="Сбросить фильтр"
				onClick={handleResetBtn}
			/>
		</section>
	)
}

export default AsideCategory