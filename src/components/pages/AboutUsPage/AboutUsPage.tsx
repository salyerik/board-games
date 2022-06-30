import { FC, useEffect, useState } from 'react'

import { getData } from '../../../server/getAboutUsPageData'
import { iAboutUsState } from '../../../types/aboutUsPageTypes'
import BreadCrumps from '../../UI/BreadCrumps'
import Preloader from '../../UI/Preloader'

import s from './AboutUsPage.module.sass'

const AboutUsPage: FC = () => {
	const [data, setData] = useState<iAboutUsState>()

	useEffect(() => {
		getData().then(data => setData(data))
	}, [])

	if (!data) {
		return <Preloader />
	}

	return (
		<section className='container'>
			<BreadCrumps links={data.links} />
			<h4 className='title'>О центре</h4>
			<div>
				{data.items.map(item => (
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