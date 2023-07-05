import { FC } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { toggleActiveMenu } from '../../../store/slices/header-slice';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useTypedSelector from '../../../hooks/useTypedSelector';
import SocialNets from '../../UI/SocialNets';

import s from './HeaderBottom.module.sass';

const HeaderBottom: FC = () => {
	const dispatch = useAppDispatch();
	const { links, isMenuActive } = useTypedSelector(({ header }) => header);

	function handleMenuActive() {
		if (window.innerWidth < 768) {
			dispatch(toggleActiveMenu());
		}
	}

	return (
		<section className='container'>
			<div
				onClick={handleMenuActive}
				className={cn(s.bg, {
					[s.bg__active]: isMenuActive,
				})}>
				<ul
					onClick={e => e.stopPropagation()}
					className={cn(s.flex, {
						[s.flex__active]: isMenuActive,
					})}>
					{links.map(link => (
						<li onClick={handleMenuActive} key={link.path} className={s.link}>
							<NavLink to={link.path}>{link.title}</NavLink>
						</li>
					))}
					<SocialNets />
				</ul>
			</div>
		</section>
	);
};

export default HeaderBottom;
