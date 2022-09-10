import { Link } from 'react-router-dom'

import BtnLogin from '../../../../UI/BtnLogin'
import InputLogin from '../../../../UI/InputLogin'

import s from './RegisterTab.module.sass'

const RegisterTab = () => {
	return (
		<form action='#'>
			<InputLogin label='First Name' type='text' />
			<InputLogin label='Last Name' type='text' />
			<InputLogin label='Phone number' type='number' />
			<InputLogin label='Password ' type='password' />
			<label className={s.checkboxLabel}>
				<input type="checkbox" className='checkboxInput' />
				<span>
          I agree with <Link to="/board-games/policy">privacy policy</Link>
					and with the processing of personal data
				</span>
			</label>
			<label className={s.checkboxLabelBottom}>
				<input type="checkbox" className='checkboxInput' />
				<span>I want to be the first to receive news and promotions</span>
			</label>
			<BtnLogin text={'Sign up'} />
		</form>
	)
}

export default RegisterTab