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
			<div className='title'>The cart is empty</div>
		</div>
	}

	return (
		<section className={'container' + ' ' + s.wrapper}>
			<BreadCrumps text={'Cart'} />
			<h3 className='title'>Cart</h3>
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