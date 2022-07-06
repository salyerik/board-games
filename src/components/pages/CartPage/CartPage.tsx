import { FC } from 'react'
import useTypedSelector from '../../../hooks/useTypedSelector'
import BreadCrumps from '../../UI/BreadCrumps'
import CartAside from './CartAside'
import CartItem from './CartItem'

import s from './CartPage.module.sass'

const Cart: FC = () => {
	const addedItems = useTypedSelector(({ cartPage }) => cartPage.addedItems)

	if (addedItems.length === 0) {
		return <div className='container'>
			<div className='title'>Корзина пуста</div>
		</div>
	}

	return (
		<section className={'container' + ' ' + s.wrapper}>
			<BreadCrumps text={'Корзина'} />
			<h3 className='title'>Корзина</h3>
			<div className={s.flex}>
				<div className={s.list}>
					{addedItems.map(item => (
						<CartItem
							id={Object.keys(item).toString()}
							key={Object.keys(item).toString()}
						/>
					))}
				</div>
				<aside className={s.aside}>
					<CartAside />
				</aside>
			</div>
		</section>
	)
}

export default Cart