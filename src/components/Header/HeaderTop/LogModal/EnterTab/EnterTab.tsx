import { FC, useState } from 'react'

import useTypedSelector from '../../../../../hooks/useTypedSelector'
import BtnLogin from '../../../../UI/BtnLogin'
import InputLogin from '../../../../UI/InputLogin'
import IconsSvg from '../../../../UI/IconsSVG'

import s from './EnterTab.module.sass'

const EnterTab: FC = () => {
	const [isWithPassword, setWithPassword] = useState(true)
	const { socialNets } = useTypedSelector(state => state.common.commonData)

	function handleEntryMode() {
		setWithPassword(!isWithPassword)
	}

	return (
		<form action='#'>
			{isWithPassword ?
				<>
					<InputLogin label='E-mail ' type='text' />
					<InputLogin label='Пароль ' type='password' />
					<div className={s.forgotPasswordBtn} onClick={handleEntryMode}>
						Забыли пароль?
					</div>
					<div className={s.labelAnotherLog} onClick={handleEntryMode}>
						Войти с помощью SMS подтверждения
					</div>
				</> :
				<>
					<InputLogin label='Телефон' type='text' />
					<div className={s.labelAnotherLog} onClick={handleEntryMode}>
						Войти с помощью пароля
					</div>
				</>
			}
			<div className={s.labelSocialNets}>Войти через аккаунт социальной сети</div>
			<div className={s.socialNet}>
				{socialNets.map(link => (
					!!link.modalImg &&
					<a key={link.path} href={link.path} target='_blank'>
						<IconsSvg id={link.modalImg} />
					</a>
				))}
			</div>
			<BtnLogin text={isWithPassword ? 'Войти' : 'Получить код в SMS'} />
		</form>
	)
}

export default EnterTab