import { FC } from 'react'

import useTypedSelector from '../../../../hooks/useTypedSelector'
import FormQuestion from './FormQuestion'

import s from './Contacts.module.sass'
import IconsSVG from '../../../UI/IconsSVG'

const Contacts: FC = () => {
	const {
		phoneNumber, mail, address, workMode
	} = useTypedSelector(state => state.common.commonData)

	return (
		<section className='container'>
			<div className={s.flex}>
				<div className={s.content}>
					<h3 className='title'>Contacts</h3>
					<div className={s.contact}>
						<IconsSVG id='phone' />
						<span className={s.label}>Phone number:</span>
						<a href={phoneNumber.path} className={s.link}>
							{phoneNumber.text}
						</a>
					</div>
					<div className={s.contact}>
						<IconsSVG id='mail' />
						<span className={s.label}>E-mail:</span>
						<a href={mail.path} className={s.link}>
							{mail.text}
						</a>
					</div>
					<div className={s.contact}>
						<IconsSVG id='navigate' />
						<span className={s.label}>Address:</span>
						<div className={s.link}>
							{`${address.state}, ${address.city}, ${address.street}`}
						</div>
					</div>
					<div className={s.contact}>
						<IconsSVG id='clock' />
						<span className={s.label}>Club mode of operation:</span>
						<div className={s.link}>
							{`c ${workMode.from} to ${workMode.to}, ${workMode.days}`}
						</div>
					</div>
					<div className={s.questionTitle}>Any questions?</div>
					<FormQuestion />
				</div>
				<div className={s.map}>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396.4694817637885!2d-121.89935286088799!3d37.348288366107155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcc825610fdbb%3A0xc5f906285d05f508!2sSunflowers%20Montessori%20Preschool!5e0!3m2!1sru!2skg!4v1656586993667!5m2!1sru!2skg" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
		</section>
	)
}

export default Contacts