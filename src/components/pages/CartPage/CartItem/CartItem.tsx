import { FC, useEffect, useState } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import { getProduct } from '../../../../server/getProducts'
import {
	addCartItem, decrementCartItem, removeCartItem
} from '../../../../redux/slices/cartPageSlice'

import { iCardProduct } from '../../../../types/commonTypes'
import useTypedSelector from '../../../../hooks/useTypedSelector'
import useAppDispatch from '../../../../hooks/useAppDispatch'

import s from './CartItem.module.sass'
import IconsSVG from '../../../UI/IconsSVG'
import Preloader from '../../../UI/Preloader'

const CartItem: FC<{ id: string }> = ({ id }) => {
	const dispatch = useAppDispatch()
	const [item, setItem] = useState<iCardProduct>()
	const [itemQuantity, setItemQuantity] = useState(1)
	const addedItems = useTypedSelector(({ cartPage }) => cartPage.addedItems)

	useEffect(() => {
		getProduct(id).then(data => setItem(data))
	}, [])

	useEffect(() => {
		const item = addedItems.find(item => item[id])
		if (item) {
			setItemQuantity(item[id])
		}
	}, [addedItems])

	function incrementItemHandle() {
		if (item) {
			dispatch(addCartItem({
				id,
				newPrice: item.price.new,
				oldPrice: item.price.old || item.price.new
			}))
		}
	}

	function decrementItemHandle() {
		if (itemQuantity > 1 && item) {
			dispatch(decrementCartItem({
				id,
				newPrice: item.price.new,
				oldPrice: item.price.old || item.price.new
			}))
		}
	}

	function removeItemHandle() {
		if (item) {
			dispatch(removeCartItem({
				id,
				newPrice: item.price.new * itemQuantity,
				oldPrice: (item.price.old || item.price.new) * itemQuantity,
				itemQuantity
			}))
		}
	}

	if (!item) {
		return <Preloader />
	}

	return (
		<section className={s.item}>
			<Link to={`/product/${item.id}`} className={s.img}>
				<img src={item.img.compressed} alt={item.img.compressed} />
			</Link>
			<Link to={`/product/${item.id}`} className={s.name}>{item.name}</Link>
			<div className={s.params}>
				<div className={s.price}>
					{item.price.old &&
						<span className={s.oldPrice}>{item.price.old * itemQuantity}$</span>
					}
					<span className={s.newPrice}>{item.price.new * itemQuantity}$</span>
				</div>
				<div className={s.quantity}>
					<button type='button' onClick={decrementItemHandle}
						className={cn(s.btnQuantity, s.minus)}>-</button>
					<span>{itemQuantity} шт</span>
					<button type='button' onClick={incrementItemHandle}
						className={cn(s.btnQuantity, s.plus)}>+</button>
				</div>
				<button className={s.btnDelete} onClick={removeItemHandle}>
					<IconsSVG id='trash' />
				</button>
			</div>
		</section>
	)
}

export default CartItem