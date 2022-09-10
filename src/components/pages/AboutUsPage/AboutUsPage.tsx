import { FC } from 'react'

import useTypedSelector from '../../../hooks/useTypedSelector'
import BreadCrumps from '../../UI/BreadCrumps'

import s from './AboutUsPage.module.sass'

const AboutUsPage: FC = () => {
	const { aboutUsPage } = useTypedSelector(state => state.common)

	return (
		<section className='container'>
			<BreadCrumps text='About the Center' />
			<h4 className='title'>About the Center</h4>
			<div>
				{aboutUsPage.map(item => (
					<div key={item.id} className={s.flex}>
						<div className={s.content}>
							<div className={s.label}>{item.label}</div>
							<div className={s.text}>{item.text}</div>
						</div>
						<div className={s.images}>
							<div className={s.img}>
								<img src={item.images[0]} alt={item.label} />
							</div>
							<div className={s.img}>
								<img src={item.images[1]} alt={item.label} />
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default AboutUsPage