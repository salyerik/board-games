import BtnLogin from '../../../UI/BtnLogin'
import InputLogin from '../../../UI/InputLogin'

import s from './CallOrderModal.module.sass'

const CallOrderModal = () => {
	return (
		<div onClick={(e) => e.stopPropagation()} className={s.wrapper}>
			<div className={s.title}>Заказать телефонный звонок</div>
			<InputLogin label='Ваше имя' type='text' />
			<InputLogin label='Ваш телефон' type='text' />
			<div className={s.btn}>
				<BtnLogin text='Оставить заявку' />
			</div>
		</div>
	)
}

export default CallOrderModal