import { FC } from 'react';

import useTypedSelector from '../../../../../hooks/useTypedSelector';

import s from './OrderTotal.module.sass';

const OrderTotal: FC = () => {
	const { withDiscount, withoutDiscount } = useTypedSelector(
		({ cartPage }) => cartPage.price,
	);

	return (
		<section className={s.totalPriceContainer}>
			<div className={s.totalLabel}>Total</div>
			<div className={s.totalFlex}>
				<span>Order amount</span>
				<span className={s.dotted}></span>
				<span>{withDiscount}$</span>
			</div>
			<div className={s.totalFlex}>
				<span>Shipping cost</span>
				<span className={s.dotted}></span>
				<span>50$</span>
			</div>
			<div className={s.totalFlex}>
				<span>Discount amount</span>
				<span className={s.dotted}></span>
				<span>{withoutDiscount - withDiscount}$</span>
			</div>
			<div className={s.totalFlex}>
				<span>Amount due</span>
				<span className={s.dotted}></span>
				<span className={s.priceMain}>{withDiscount + 50}$</span>
			</div>
		</section>
	);
};

export default OrderTotal;
