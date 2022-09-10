import { FC, useEffect, useState } from 'react'

import { getProduct } from '../../../../../server/getProducts'
import { iCardProduct } from '../../../../../types/commonTypes'

import s from './OrderItem.module.sass'

const OrderItem: FC<{ id: string, quantity: number }> = ({ id, quantity }) => {
	const [item, setItem] = useState<iCardProduct>()

	useEffect(() => {
		getProduct(id).then(data => setItem(data))
	}, [])

	if (!item) {
		return <h1>Loading...</h1>
	}

	return (
		<section className={s.item}>
			<h6 className={s.itemName}>{item.name}</h6>
			<div className={s.itemParams}>
				<span className={s.itemQuantity}>{quantity}pcs</span>
				<span className={s.itemPrice}>{item.price.new * quantity}$</span>
			</div>
		</section>
	)
}

export default OrderItem