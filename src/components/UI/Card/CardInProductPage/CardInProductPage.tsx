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
				<span>Shipping</span>
				<IconsSVG id='arrowSpoiler' />
			</div>
			{isDeliveryActive &&
				<div className={s.text}>
					<p>Pickup from the store: today</p>
					<p>Pickup from 761 locations: 1-3 days</p>
					<p>Courier delivery: 1-3 days</p>
					<p>Mail delivery: from 3 days</p>
				</div>
			}
			<div
				className={cn(s.label, 'asideCategoryTitle', {
					'asideCategoryTitle_active': isPaymentActive
				})}
				onClick={handlePayment}
			>
				<span>Payment</span>
				<IconsSVG id='arrowSpoiler' />
			</div>
			{isPaymentActive &&
				<div className={s.text}>
					<p>You accept the terms of the Public offer and give
						consent to the processing of personal data</p>
					<p>Courier delivery: 1-3 days</p>
					<p>Mail delivery: from 3 days</p>
					<p>Pickup from the store: today</p>
					<p>Pickup from 761 locations: 1-3 days</p>
				</div>
			}
			<button className={s.btnBottom} onClick={handleModal}>
        Ask a question
			</button>
		</article>
	)
}

export default CardInProductPage