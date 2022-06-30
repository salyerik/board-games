import { FC } from 'react'

import useTypedSelector from '../../../../../hooks/useTypedSelector'

import s from './OrderTotal.module.sass'

const OrderTotal: FC = () => {
	const { withDiscount, withoutDiscount } = useTypedSelector(
		({ cartPage }) => cartPage.price
	)

	return (
		<section className={s.totalPriceContainer}>
			<div className={s.totalLabel}>Итог</div>
			<div className={s.totalFlex}>
				<span>Сумма заказа</span>
				<span className={s.dotted}></span>
				<span>{withDiscount}$</span>
			</div>
			<div className={s.totalFlex}>
				<span>Стоимость доставки</span>
				<span className={s.dotted}></span>
				<span>50$</span>
			</div>
			<div className={s.totalFlex}>
				<span>Размер скидки</span>
				<span className={s.dotted}></span>
				<span>{withoutDiscount - withDiscount}$</span>
			</div>
			<div className={s.totalFlex}>
				<span>Сумма к оплате</span>
				<span className={s.dotted}></span>
				<span className={s.priceMain}>{withDiscount + 50}$</span>
			</div>
		</section>
	)
}

export default OrderTotal