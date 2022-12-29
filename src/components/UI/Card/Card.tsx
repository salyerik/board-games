import { Link } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'
import cn from 'classnames'

import { addCartItem } from '../../../redux/slices/cartPageSlice'
import useAppDispatch from '../../../hooks/useAppDispatch'
import useTypedSelector from '../../../hooks/useTypedSelector'
import { iCardProduct } from '../../../types/commonTypes'
import CardInProductPage from './CardInProductPage'

import s from './Card.module.sass'
import IconsSVG from '../IconsSVG'

const Card: FC<iCardProduct> = ({ _id, img, discount, people, timer, age, name, price, isProductPage }) => {
	const dispatch = useAppDispatch()
	const [itemQuantity, setItemQuantity] = useState(0)
	const addedItems = useTypedSelector(({ cartPage }) => cartPage.addedItems)

	useEffect(() => {
		if (addedItems.length) {
			const item = addedItems.find(item => item[_id])
			if (item) {
				setItemQuantity(item[_id])
			}
		}
	}, [addedItems])

	function addItemToCart() {
		dispatch(
			addCartItem({
				id: _id,
				newPrice: price.new,
				oldPrice: price.old || price.new,
			})
		)
	}

	return (
		<article className={s.card}>
			{!isProductPage && discount && <div className={s.discount}>-{discount}%</div>}
			<Link
				to={`/board-games/product/${_id}`}
				className={cn(s.mainImg, {
					[s.mainImg_active]: isProductPage,
				})}
			>
				<img src={img.original} alt={name} />
			</Link>
			<div className={s.info}>
				<span className={s.people}>
					<img src={'https://i.ibb.co/fpmn2Bj/people.png'} alt='peopleIcon' />
					{people[0]}-{people[1]}
				</span>
				{timer[0] !== 0 && (
					<span className={s.timer}>
						<IconsSVG id='cardTimer' />
						{timer[0]}-{timer[1]}
					</span>
				)}
				<span className={s.age}>{age}+</span>
			</div>
			{!isProductPage && (
				<Link to={`/board-games/product/${_id}`} className={s.name}>
					{name}
				</Link>
			)}
			<div className={cn(s.price, { [s.price_active]: isProductPage })}>
				{price.old && <span className={s.oldPrice}>{price.old}$</span>}
				<span className={s.newPrice}>{price.new}$</span>
			</div>
			<button className={cn(s.btn, { [s.btn_active]: isProductPage })} onClick={addItemToCart}>
				<span>To cart</span>
				<span className={s.quantity}>
					{!!itemQuantity && <span>{itemQuantity}</span>}
					<IconsSVG id='cardPeople' />
				</span>
			</button>
			<Link
				onClick={addItemToCart}
				to={`/board-games/order`}
				className={cn(s.btnFast, {
					[s.btnFast_active]: isProductPage,
				})}
			>
				Buy in 1 click
			</Link>
			{isProductPage && <CardInProductPage />}
		</article>
	)
}

export default Card
