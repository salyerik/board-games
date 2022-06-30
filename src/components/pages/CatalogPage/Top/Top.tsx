import { FC } from 'react'
import s from './Top.module.sass'

const Top: FC = () => (
	<section className={s.wrapper}>
		<img src={'https://i.ibb.co/5RC6khb/bg1.jpg'} alt="bg1" />
		<div className="container">
			<h4 className={s.title}>Октябрьский турнир Warhammer 40000</h4>
			<div className={s.text}>
				У тебя есть команда и вы готовы принять
				участие в турнире Warhammer 40000?
			</div>
		</div>
	</section>
)

export default Top