import { FC } from 'react'

import BtnLogin from '../../BtnLogin'
import InputLogin from '../../InputLogin'

import s from './CardModal.module.sass'

const CardModal: FC = () => {
	return (
		<section onClick={(e) => e.stopPropagation()} className={s.wrapper}>
			<div className={s.title}>Задать вопрос</div>
			<InputLogin label='Ваше имя' type='text' />
			<InputLogin label='Ваш телефон' type='text' />
			<InputLogin label='Ваш вопрос' type='textarea' />
			<div className={s.btn} >
				<BtnLogin text='Оставить вопрос' />
			</div>
		</section>
	)
}

export default CardModal