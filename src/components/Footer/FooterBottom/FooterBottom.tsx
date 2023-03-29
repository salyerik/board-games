import { FC } from 'react'
import { Link } from 'react-router-dom'
import useTypedSelector from '../../../hooks/useTypedSelector'

import s from './FooterBottom.module.sass'

const FooterBottom: FC = () => {
	const { images } = useTypedSelector(state => state.common.commonData.footer)

	return (
		<section className={s.footerBottom}>
			<div className='container'>
				<div className={s.flex}>
					<div className={s.left}>
						<span className={s.copy}>© 2022</span>
						<Link to='/boardGames/policy' className={s.policy}>
							Privacy Policy
						</Link>
					</div>
					<div className={s.middle}>
						{images.map(img => (
							<img key={img} src={img} alt={img} />
						))}
					</div>
					<div className={s.right}>
						<span className={s.copy}>
							The content does not constitute a public offer
						</span>
						<Link to='/boardGames/policy' className={s.policy}>
							User Agreement
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FooterBottom
