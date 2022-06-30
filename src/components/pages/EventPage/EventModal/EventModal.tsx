import { Dispatch, FC, SetStateAction } from 'react'

import BtnLogin from '../../../UI/BtnLogin'
import InputLogin from '../../../UI/InputLogin'

import s from './EventModal.module.sass'

interface iEventModalProps {
	setModalActive: Dispatch<SetStateAction<boolean>>
}

const EventModal: FC<iEventModalProps> = ({ setModalActive }) => {
	return (
		<section onClick={(e) => e.stopPropagation()} className={s.wrapper}>
			<div className={s.title}>Регистрация на мероприятие</div>
			<InputLogin label='Ваше имя' type='text' />
			<InputLogin label='Ваш телефон' type='text' />
			<div className={s.btn}>
				<BtnLogin setModalActive={setModalActive} text='Оставить заявку' />
			</div>
		</section>
	)
}

export default EventModal