import { FC } from 'react'
import { MainPageContext } from '../MainPage'
import Preloader from '../../../UI/Preloader'

import s from './AboutUs.module.sass'

const AboutUs: FC = () => (
	<MainPageContext.Consumer>{value => {
		if (!value) {
			return <Preloader />
		}

		return (
			<section className="container">
				<div className={s.flex}>
					<div className={s.content}>
						<h4 className='title'>Об игровом центре «Board Games»</h4>
						<div className={s.text}>
							{value.aboutUs.map((text, i) => <p key={i}>{text}</p>)}
						</div>
					</div>
					<div className={s.img}>
						<img src={value.images[0]} alt="aboutUsImg" />
					</div>
				</div>
			</section>
		)
	}}
	</MainPageContext.Consumer>
)

export default AboutUs