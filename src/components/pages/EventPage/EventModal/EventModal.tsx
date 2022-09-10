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
			<div className={s.title}>Registration for the event</div>
			<InputLogin label='Your name' type='text' />
			<InputLogin label='Your phone number' type='text' />
			<div className={s.btn}>
				<BtnLogin setModalActive={setModalActive} text='Leave a request' />
			</div>
		</section>
	)
}

export default EventModal