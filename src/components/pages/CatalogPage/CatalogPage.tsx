import { FC, useEffect, useRef } from 'react'

import { getProducts } from '../../../server/getProducts'
import {
	setSortPrice, setTotalItem, toggleLoadingProducts
} from '../../../redux/slices/filterCategorySlice'
import { setCatalogItems } from '../../../redux/slices/productsSlice'
import useAppDispatch from '../../../hooks/useAppDispatch'
import useTypedSelector from '../../../hooks/useTypedSelector'

import AsideCategory from './AsideCategory'
import Products from './Products'
import Top from './Top'
import Pagination from './Pagination'
import BreadCrumps from '../../UI/BreadCrumps'
import Questions from '../../UI/Questions'

import s from './CatalogPage.module.sass'
import IconsSVG from '../../UI/IconsSVG'

const Catalog: FC = () => {
	const dispatch = useAppDispatch()
	const topRef = useRef<HTMLDivElement>(null)
	const {
		isOnlyStocked, price, selectedAge, players,
		category, subCategory, sortPrice, page, pageLimit
	} = useTypedSelector(state => state.filterCategory)

	useEffect(() => {
		console.log(category)
		dispatch(toggleLoadingProducts(true))
		getProducts({
			isOnlyStocked, price, selectedAge, players, category, subCategory,
			sortPrice, page, pageLimit
		}).then(res => {
			dispatch(setTotalItem(+res.headers['x-total-count']))
			dispatch(setCatalogItems(res.data))
		}).then(() => {
			dispatch(toggleLoadingProducts(false))
		}).catch(e => {
			console.log(e.message)
			dispatch(toggleLoadingProducts(false))
		})
	}, [isOnlyStocked, price, selectedAge, players,
		category, subCategory, sortPrice, page, pageLimit])

	function handleFilter(e: React.ChangeEvent<HTMLSelectElement>) {
		dispatch(setSortPrice(e.target.value))
	}

	return (
		<>
			<Top />
			<div className='container' ref={topRef}>
				<BreadCrumps text='Catalog' />
				<div className={s.flex} >
					<h2 className={s.title}>All categories</h2>
					<div className='select'>
						<select defaultValue={''} onChange={handleFilter}>
							<option value={''} disabled>Sort</option>
							<option value={'desc'}>By decreasing price</option>
							<option value={'asc'}>Price ascending</option>
						</select>
						<IconsSVG id='arrowSpoiler' />
					</div>
				</div>
				<div className={s.content}>
					<aside className={s.aside}>
						<AsideCategory />
					</aside>
					<div className={s.products}>
						<Products />
					</div>
				</div>
				<Pagination topHeight={topRef.current ? topRef.current.offsetTop - 30 : 0} />
				<div className={s.questionsWrapper}>
					<Questions />
				</div>
			</div>
		</>
	)
}

export default Catalog