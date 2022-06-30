import { FC } from 'react'

import s from './Preloader.module.sass'

const Preloader: FC = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.preloader}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default Preloader