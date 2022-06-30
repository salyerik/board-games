import cn from 'classnames'
import { FC, useEffect, useState } from 'react'

import CardModal from './../CardModal'

import s from './CardInProductPage.module.sass'
import IconsSVG from '../../IconsSVG'

const CardInProductPage: FC = () => {
	const [isModalActive, setModalActive] = useState(false)
	const [isDeliveryActive, setDelivery] = useState(false)
	const [isPaymentActive, setPayment] = useState(false)

	useEffect(() => {
		if (isModalActive) {
			document.body.classList.add('lock')
		} else {
			document.body.classList.remove('lock')
		}
	}, [isModalActive])

	function handleModal() {
		setModalActive(!isModalActive)
	}
	function handleDelivery() {
		setDelivery(!isDeliveryActive)
	}
	function handlePayment() {
		setPayment(!isPaymentActive)
	}

	return (
		<article className={s.bottomWrapper}>
			{isModalActive && (
				<div className={s.modal} onClick={handleModal}>
					<span className='closeBtn'>&times;</span>
					<CardModal />
				</div>
			)}
			<div
				className={cn(s.label, 'asideCategoryTitle', {
					'asideCategoryTitle_active': isDeliveryActive
				})}
				onClick={handleDelivery}
			>
				<span>Доставка</span>
				<IconsSVG id='arrowSpoiler' />
			</div>
			{isDeliveryActive &&
				<div className={s.text}>
					<p>Самовывоз из магазина: сегодня</p>
					<p>Самовывоз из 761 пункта: 1-3 дня</p>
					<p>Курьерская доставка: 1-3 дня</p>
					<p>Доставка почтой: от 3 дней</p>
				</div>
			}
			<div
				className={cn(s.label, 'asideCategoryTitle', {
					'asideCategoryTitle_active': isPaymentActive
				})}
				onClick={handlePayment}
			>
				<span>Оплата</span>
				<IconsSVG id='arrowSpoiler' />
			</div>
			{isPaymentActive &&
				<div className={s.text}>
					<p>Вы принимаете условия Публичной оферты и даете
						согласие на обработку персональных данных</p>
					<p>Курьерская доставка: 1-3 дня</p>
					<p>Доставка почтой: от 3 дней</p>
					<p>Самовывоз из магазина: сегодня</p>
					<p>Самовывоз из 761 пункта: 1-3 дня</p>
				</div>
			}
			<button className={s.btnBottom} onClick={handleModal}>
				Задать вопрос
			</button>
		</article>
	)
}

export default CardInProductPage