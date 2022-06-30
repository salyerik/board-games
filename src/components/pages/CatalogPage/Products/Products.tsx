import { FC } from 'react'

import useTypedSelector from '../../../../hooks/useTypedSelector'
import Card from '../../../UI/Card'
import Preloader from '../../../UI/Preloader'

import s from './Products.module.sass'

const Products: FC = () => {
	const items = useTypedSelector(({ products }) => products.items)
	const isLoadingProducts = useTypedSelector(
		({ filterCategory }) => filterCategory.isLoadingProducts
	)

	if (isLoadingProducts) {
		return <Preloader />
	}

	if (!items.length) {
		return (
			<div className={s.notFoundItem}>
				<div>
					<span>Товары не найдены</span>
					Попробуйте изменить<br />
					фильтрацию или категорию
				</div>
			</div>
		)
	}

	return (
		<section className={s.flex}>
			{items.map(item => (
				<div key={item.id} className={s.item}>
					<Card {...item} />
				</div>
			))}
		</section>
	)
}

export default Products