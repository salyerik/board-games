import { FC, useState } from 'react';

import useTypedSelector from '../../../../../hooks/useTypedSelector';
import BtnLogin from '../../../../UI/BtnLogin';
import InputLogin from '../../../../UI/InputLogin';
import IconsSvg from '../../../../UI/IconsSVG';

import s from './EnterTab.module.sass';

const EnterTab: FC = () => {
	const [isWithPassword, setWithPassword] = useState(true);
	const { socialNets } = useTypedSelector(state => state.common.commonData);

	function handleEntryMode() {
		setWithPassword(!isWithPassword);
	}

	return (
		<form action='#'>
			{isWithPassword ? (
				<>
					<InputLogin label='E-mail ' type='text' />
					<InputLogin label='Password ' type='password' />
					<div className={s.forgotPasswordBtn} onClick={handleEntryMode}>
						Forgot your password?
					</div>
					<div className={s.labelAnotherLog} onClick={handleEntryMode}>
						Sign in via SMS confirmation
					</div>
				</>
			) : (
				<>
					<InputLogin label='Phone' type='text' />
					<div className={s.labelAnotherLog} onClick={handleEntryMode}>
						Sign in with your password
					</div>
				</>
			)}
			<div className={s.labelSocialNets}>
				Sign in with a social networking account
			</div>
			<div className={s.socialNet}>
				{socialNets.map(
					link =>
						!!link.modalImg && (
							<a key={link.path} href={link.path} target='_blank'>
								<IconsSvg id={link.modalImg} />
							</a>
						),
				)}
			</div>
			<BtnLogin text={isWithPassword ? 'Log in' : 'Get code by SMS'} />
		</form>
	);
};

export default EnterTab;
