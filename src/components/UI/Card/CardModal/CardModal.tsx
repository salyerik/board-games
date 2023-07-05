import { FC } from 'react';

import BtnLogin from '../../BtnLogin';
import InputLogin from '../../InputLogin';

import s from './CardModal.module.sass';

const CardModal: FC = () => {
	return (
		<section onClick={e => e.stopPropagation()} className={s.wrapper}>
			<div className={s.title}>Ask a question</div>
			<InputLogin label='Your name' type='text' />
			<InputLogin label='Your phone number' type='text' />
			<InputLogin label='Your question' type='textarea' />
			<div className={s.btn}>
				<BtnLogin text='Leave a question' />
			</div>
		</section>
	);
};

export default CardModal;
