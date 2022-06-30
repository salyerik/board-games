import { FC } from 'react'
import { Link } from 'react-router-dom'

import useTypedSelector from '../../../../hooks/useTypedSelector'

import s from './CartAside.module.sass'
import IconsSVG from '../../../UI/IconsSVG'

const CartAside: FC = () => {
	const {
		withDiscount, withoutDiscount
	} = useTypedSelector(({ cartPage }) => cartPage.price)

	return (
		<section className={s.wrapper}>
			<div className={s.top}>
				<span className={s.labelPrice}>Сумма:</span>
				<span className={`${s.price} ${s.price_old}`}>{withoutDiscount}$</span>
			</div>
			<div className={s.top + ' ' + s.top_bottom}>
				<span className={s.labelPrice}>Со скидкой:</span>
				<span className={s.price}>{withDiscount}$</span>
			</div>
			<div className={s.label}>Промокод:</div>
			<div className={s.form}>
				<input type="text" className={s.input} />
				<button className={s.promoBtn}>
					<IconsSVG id='check' />
				</button>
			</div>
			<Link to={'/order'} className={s.btnTop}>Оформить</Link>
		</section>
	)
}

export default CartAside