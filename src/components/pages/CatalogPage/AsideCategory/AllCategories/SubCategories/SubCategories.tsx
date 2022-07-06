import { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import cn from 'classnames'

import useTypedSelector from '../../../../../../hooks/useTypedSelector'
import ItemSubCategories from './ItemSubCategories'

import s from './SubCategories.module.sass'

const SubCategories: FC = () => {
	const params = useParams()
	const categories = useTypedSelector(state => state.filterCategory.categories)

	console.log(params['*'])

	return (
		<section className={s.wrapper}>
			{categories.map(item => (
				item.subCategories ?
					<ItemSubCategories key={item.path} {...item} />
					:
					<Link
						key={item.path}
						to={item.path}
						className={cn('asideCategoryTitle', 'asideCategoryTitle_inner',
							'linkUrl', {
							'linkUrl_active': item.path === params['*']
						})}
					>
						{item.name}
					</Link >
			))}
		</section>
	)
}

export default SubCategories