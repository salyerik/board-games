import { FC } from 'react'

import useTypedSelector from '../../../../hooks/useTypedSelector'

import s from './AboutUs.module.sass'

const AboutUs: FC = () => {
	const { aboutUs, images } = useTypedSelector(state => state.common.mainPage)

	return (
		<section className="container">
			<div className={s.flex}>
				<div className={s.content}>
					<h4 className='title'>Об игровом центре «Board Games»</h4>
					<div className={s.text}>
						{aboutUs.map((text, i) => <p key={i}>{text}</p>)}
					</div>
				</div>
				<div className={s.img}>
					<img src={images[0]} alt="aboutUsImg" />
				</div>
			</div>
		</section>
	)
}

export default AboutUs