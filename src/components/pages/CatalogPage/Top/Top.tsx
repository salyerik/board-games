import { FC } from 'react';
import s from './Top.module.sass';

const Top: FC = () => (
	<section className={s.wrapper}>
		<img src={'https://i.ibb.co/5RC6khb/bg1.jpg'} alt='bg1' />
		<div className='container'>
			<h4 className={s.title}>October tournament Warhammer 40000</h4>
			<div className={s.text}>
				Do you have a team and are you ready to Warhammer 40000 tournament?
			</div>
		</div>
	</section>
);

export default Top;
