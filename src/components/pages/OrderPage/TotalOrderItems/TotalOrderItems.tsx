import { FC } from 'react'

import useTypedSelector from '../../../../hooks/useTypedSelector'
import OrderItem from './OrderItem'

import s from './TotalOrderItems.module.sass'

const TotalOrderItems: FC = () => {
	const { totalQuantity, price, addedItems } = useTypedSelector(
		({ cartPage }) => cartPage
	)

	return (
		<section className={s.totalItems}>
			<div className={s.total}>
        In cart <span>{totalQuantity}</span>
				{totalQuantity === 1 ? ' item ' : ' items '}
				amounting to <span>{price.withDiscount}$</span>:
			</div>
			{addedItems.map(item => {
				const id = Object.keys(item).toString()
				return (
					<OrderItem key={id} id={id} quantity={item[id]} />
				)
			})}
		</section>
	)
}

export default TotalOrderItems