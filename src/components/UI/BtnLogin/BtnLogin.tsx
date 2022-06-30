import { Dispatch, FC, SetStateAction } from 'react'

import s from './BtnLogin.module.sass'

interface iBtrLoginProps {
	text: string,
	setModalActive?: Dispatch<SetStateAction<boolean>>
}

const BtnLogin: FC<iBtrLoginProps> = ({ text, setModalActive }) => {
	function handleClick() {
		setModalActive?.(false)
		if (text === 'Зарегистрироваться') {
			alert('Регистрация временно не доступна')
		} else if (text === 'Оставить заявку') {
			alert('Ожидайте звонка')
		} else if (text === 'Оставить вопрос') {
			alert('Мы вам скоро ответим')
		} else {
			alert('Вход временно не доступен')
		}
	}
	return (
		<button type='button' onClick={handleClick} className={s.bottomBtn}>
			{text}
		</button>
	)
}

export default BtnLogin