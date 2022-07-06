import { FC } from 'react'
import { Link } from 'react-router-dom'

import { iBreadProps } from '../../../types/commonTypes'
import s from './BreadCrumps.module.sass'

const BreadCrumps: FC<iBreadProps> = ({ links, text }) => (
	<nav>
		<ul className={s.list}>
			<li className={s.link}>
				<Link to='/board-games'>Главная</Link>
				<span>&gt;</span>
			</li>
			{links && links.map(link => {
				if (link.path) {
					return (
						<li className={s.link} key={link.path}>
							<Link to={link.path}>{link.name}</Link>
							<span>&gt;</span>
						</li>
					)
				} else {
					return (
						<li className={s.link} key={link.name}>
							<span>{link.name}</span>
						</li>
					)
				}
			})}
			{text &&
				<li className={s.link}>
					<span>{text}</span>
				</li>
			}
		</ul>
	</nav>
)

export default BreadCrumps