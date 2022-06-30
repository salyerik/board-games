import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { iBreadLink } from '../../../types/commonTypes'

import s from './BreadCrumps.module.sass'

const BreadCrumps: FC<{ links: iBreadLink[] }> = ({ links }) => {
	return (
		<nav>
			<ul className={s.list}>
				{links.map(link => (
					<li className={s.link} key={link.path}>
						<NavLink to={link.path}>{link.name}</NavLink>
						<span>&gt;</span>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default BreadCrumps