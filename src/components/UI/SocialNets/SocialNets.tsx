import { FC } from 'react'

import { CommonContext } from '../../../App'
import Preloader from '../Preloader'

import s from './SocialNets.module.sass'
import IconsSVG from '../IconsSVG'

const SocialNets: FC = () => (
	<CommonContext.Consumer>{value => {
		if (!value) {
			return <Preloader />
		}
		return (
			<li className={s.socials}>
				{value.socialNets.map(item => (
					<a href={item.path} key={item.path} className={s.social}>
						<IconsSVG id={item.img} />
					</a>
				))}
			</li>
		)
	}}
	</CommonContext.Consumer>
)

export default SocialNets