import BtnLogin from '../../../UI/BtnLogin';
import InputLogin from '../../../UI/InputLogin';

import s from './CallOrderModal.module.sass';

const CallOrderModal = () => {
	return (
		<div onClick={e => e.stopPropagation()} className={s.wrapper}>
			<div className={s.title}>Order a call</div>
			<InputLogin label='Your name' type='text' />
			<InputLogin label='Your phone number' type='text' />
			<div className={s.btn}>
				<BtnLogin text='Leave a request' />
			</div>
		</div>
	);
};

export default CallOrderModal;
