import { Dispatch, FC, SetStateAction } from 'react'

import s from './BtnLogin.module.sass'

interface iBtrLoginProps {
	text: string,
	setModalActive?: Dispatch<SetStateAction<boolean>>
}

const BtnLogin: FC<iBtrLoginProps> = ({ text, setModalActive }) => {
	function handleClick() {
		setModalActive?.(false)
		if (text === 'Sign up') {
			alert('Registration is temporarily unavailable')
		} else if (text === 'Leave a request') {
			alert('Expect a call')
		} else if (text === 'Leave a question') {
			alert('We\'ll get back to you soon')
		} else {
			alert('Login is temporarily unavailable')
		}
	}
	return (
		<button type='button' onClick={handleClick} className={s.bottomBtn}>
			{text}
		</button>
	)
}

export default BtnLogin