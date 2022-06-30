import { Link } from 'react-router-dom'

import BtnLogin from '../../../../UI/BtnLogin'
import InputLogin from '../../../../UI/InputLogin'

import s from './RegisterTab.module.sass'

const RegisterTab = () => {
	return (
		<form action='#'>
			<InputLogin label='Имя' type='text' />
			<InputLogin label='Фамилия' type='text' />
			<InputLogin label='Телефон' type='number' />
			<InputLogin label='Пароль ' type='password' />
			<label className={s.checkboxLabel}>
				<input type="checkbox" className='checkboxInput' />
				<span>
					Я согласен с <Link to="policy">политикой конфиденциальности</Link>
					и с обработкой персональных данных
				</span>
			</label>
			<label className={s.checkboxLabelBottom}>
				<input type="checkbox" className='checkboxInput' />
				<span>Я хочу получать новости и узнавать об акциях первым</span>
			</label>
			<BtnLogin text={'Зарегистрироваться'} />
		</form>
	)
}

export default RegisterTab