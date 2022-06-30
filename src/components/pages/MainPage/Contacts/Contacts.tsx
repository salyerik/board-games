import { FC } from 'react'

import { CommonContext } from '../../../../App'
import FormQuestion from './FormQuestion'
import Preloader from '../../../UI/Preloader'

import s from './Contacts.module.sass'
import IconsSVG from '../../../UI/IconsSVG'

const Contacts: FC = () => {
	return (
		<CommonContext.Consumer>{value => {
			if (!value) {
				return <Preloader />
			}

			return (
				<section className='container'>
					<div className={s.flex}>
						<div className={s.content}>
							<h3 className='title'>Контакты</h3>
							<div className={s.contact}>
								<IconsSVG id='phone' />
								<span className={s.label}>Телефон:</span>
								<a href={value.phoneNumber.path} className={s.link}>
									{value.phoneNumber.text}
								</a>
							</div>
							<div className={s.contact}>
								<IconsSVG id='mail' />
								<span className={s.label}>E-mail:</span>
								<a href={value.mail.path} className={s.link}>
									{value.mail.text}
								</a>
							</div>
							<div className={s.contact}>
								<IconsSVG id='navigate' />
								<span className={s.label}>Адрес:</span>
								<div className={s.link}>
									{`${value.address.state}, ${value.address.city}, ${value.address.street}`}
								</div>
							</div>
							<div className={s.contact}>
								<IconsSVG id='clock' />
								<span className={s.label}>Режим работы клуба:</span>
								<div className={s.link}>
									{`c ${value.workMode.from} до ${value.workMode.to}, ${value.workMode.days}`}
								</div>
							</div>
							<div className={s.questionTitle}>Остались вопросы?</div>
							<FormQuestion />
						</div>
						<div className={s.map}>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396.4694817637885!2d-121.89935286088799!3d37.348288366107155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcc825610fdbb%3A0xc5f906285d05f508!2sSunflowers%20Montessori%20Preschool!5e0!3m2!1sru!2skg!4v1656586993667!5m2!1sru!2skg" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</section>
			)
		}}
		</CommonContext.Consumer>
	)
}

export default Contacts