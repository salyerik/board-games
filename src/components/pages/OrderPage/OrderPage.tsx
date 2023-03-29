import { FC, useEffect } from 'react'

import OrderForm from './OrderForm'
import TotalOrderItems from './TotalOrderItems'
import BreadCrumps from '../../UI/BreadCrumps'

import s from './OrderPage.module.sass'

const OrderPage: FC = () => {
	useEffect(() => {
		window.scroll(0, 0)
	}, [])

	const links = [
		{ path: '/boardGames/cart', name: 'Cart' },
		{ name: 'Ordering' }
	]

	return (
		<section className='container'>
			<BreadCrumps links={links} />
			<h3 className='title'>Ordering</h3>
			<div className={s.wrapper}>
				<div className={s.totalBlock}>
					<div className={s.totalInfo}>
						<TotalOrderItems />
					</div>
				</div>
				<OrderForm />
			</div>
		</section>
	)
}

export default OrderPage
