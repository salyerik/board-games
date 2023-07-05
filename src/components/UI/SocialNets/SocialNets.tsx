import { FC } from 'react';

import useTypedSelector from '../../../hooks/useTypedSelector';

import s from './SocialNets.module.sass';
import IconsSVG from '../IconsSVG';

const SocialNets: FC = () => {
	const { socialNets } = useTypedSelector(state => state.common.commonData);

	return (
		<li className={s.socials}>
			{socialNets.map(item => (
				<a href={item.path} key={item.path} className={s.social}>
					<IconsSVG id={item.img} />
				</a>
			))}
		</li>
	);
};

export default SocialNets;
