import { FC } from 'react';

import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

import s from './Footer.module.sass';

const Footer: FC = () => {
	return (
		<div className={s.footer}>
			<FooterTop />
			<FooterBottom />
		</div>
	);
};

export default Footer;
