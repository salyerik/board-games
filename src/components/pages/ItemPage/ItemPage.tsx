import { FC } from 'react'

import useTypedSelector from '../../../hooks/useTypedSelector'
import Item from './Item/Item'
import Card from '../../UI/Card'

import s from './ItemPage.module.sass'

const ItemPage: FC = () => {
	const { mainPageItems } = useTypedSelector(state => state.products)

	return (
		<section className={'container' + ' ' + s.wrapper}>
			<Item />
			{!!mainPageItems.length && <>
				<div className={s.subTitle}>Вы недавно смотрели</div>
				<div className={s.items}>
					{mainPageItems.slice(0, 4).map(item => (
						<div key={item.id} className={s.item}>
							<Card {...item} />
						</div>
					))}
				</div>
			</>}
		</section>
	)
}

export default ItemPage