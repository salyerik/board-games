import { FC } from 'react';

import s from './InputLogin.module.sass';

const InputLogin: FC<{ label: string; type: string }> = ({ label, type }) => {
	if (type === 'textarea') {
		return (
			<label className={s.inputLabel}>
				<span>{label}</span>
				<textarea placeholder={label} className={s.input} />
			</label>
		);
	}

	return (
		<label className={s.inputLabel}>
			<span>{label}</span>
			<input placeholder={label} type={type} className={s.input} />
		</label>
	);
};

export default InputLogin;
