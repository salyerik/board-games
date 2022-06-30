import { FC } from 'react'

import useTypedSelector from '../../../hooks/useTypedSelector'
import Item from './Item/Item'
import Card from '../../UI/Card'

import s from './ItemPage.module.sass'

const ItemPage: FC = () => {
	const items = useTypedSelector(({ products }) => products.items)

	return (
		<section className={'container' + ' ' + s.wrapper}>
			<Item />
			<div className={s.subTitle}>Вы недавно смотрели</div>
			<div className={s.items}>
				{items.slice(0, 4).map(item => (
					<div key={item.id} className={s.item}>
						<Card {...item} />
					</div>
				))}
			</div>
		</section>
	)
}

export default ItemPage