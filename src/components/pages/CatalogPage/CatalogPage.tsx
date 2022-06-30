import { FC, useEffect, useRef, useState } from 'react'

import {
	setPageLimit, setSortPrice
} from '../../../redux/slices/filterCategorySlice'
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
	const [topHeight, setTopHeight] = useState(0)
	const dispatch = useAppDispatch()
	const topRef = useRef<HTMLDivElement>(null)
	const links = [
		{ name: 'Главная', path: '/' },
		{ name: 'Каталог', path: '/catalog' },
	]
	const filterCategory = useTypedSelector(state => state.filterCategory)

	useEffect(() => {
		if (topRef.current) {
			setTopHeight(topRef.current.offsetTop - 30)
		}
		dispatch(setPageLimit(6))
		window.scrollTo(0, topHeight)
	}, [filterCategory])

	function handleFilter(e: React.ChangeEvent<HTMLSelectElement>) {
		dispatch(setSortPrice(e.target.value))
	}

	return (
		<>
			<Top />
			<div className='container' ref={topRef}>
				<BreadCrumps links={links} />
				<div className={s.flex} >
					<h2 className={s.title}>Все категории</h2>
					<div className='select'>
						<select defaultValue={''} onChange={handleFilter}>
							<option value={''} disabled>Сортировка</option>
							<option value={'desc'}>По убыванию цены</option>
							<option value={'asc'}>По возрастанию цены</option>
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
				<Pagination topHeight={topHeight} />
				<div className={s.questionsWrapper}>
					<Questions />
				</div>
			</div>
		</>
	)
}

export default Catalog