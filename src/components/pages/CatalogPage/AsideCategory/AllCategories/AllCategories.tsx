import { FC, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import cn from 'classnames'

import {
	setCategory, setSubCategory, toggleCategoriesSpoiler
} from '../../../../../redux/slices/filterCategorySlice'
import useTypedSelector from '../../../../../hooks/useTypedSelector'
import useAppDispatch from '../../../../../hooks/useAppDispatch'
import SubCategories from './SubCategories'

import IconsSVG from '../../../../UI/IconsSVG'

const AllCategories: FC = () => {
	const dispatch = useAppDispatch()
	const { categoriesFilter } = useTypedSelector(({ filterCategory }) =>
		filterCategory.isSpoilerActive)
	const params = useParams()

	useEffect(() => {
		if (!!params["*"]) {
			if (params['*'].includes('/')) {
				dispatch(setCategory(params["*"].split('/')[0]))
				dispatch(setSubCategory(params["*"].split('/')[1]))
			} else {
				dispatch(setCategory(params["*"]))
				dispatch(setSubCategory(''))
			}
		} else {
			dispatch(setCategory(''))
			dispatch(setSubCategory(''))
		}
	}, [params])

	function handleCatalog() {
		dispatch(toggleCategoriesSpoiler(!categoriesFilter))
	}

	return (
		<section className={'asideCategoryWrapper'}>
			<Link
				to='/board-games/catalog'
				className={cn('asideCategoryTitle', {
					'asideCategoryTitle_active': categoriesFilter
				})}
				onClick={handleCatalog}
			>
				<span className={cn('linkUrl', {
					'linkUrl_active': !params["*"]
				})}>Все категории</span>
				<IconsSVG id='arrowSpoiler' />
			</Link>
			{categoriesFilter && <SubCategories />}
		</section>
	)
}

export default AllCategories