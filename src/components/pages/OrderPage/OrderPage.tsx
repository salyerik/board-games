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
		{ path: '/', name: 'Главная' },
		{ path: '/cart', name: 'Корзина' },
		{ path: '/order', name: 'Оформление заказа' },
	]

	return (
		<section className='container'>
			<BreadCrumps links={links} />
			<h3 className='title'>Оформление заказа</h3>
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