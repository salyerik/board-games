import { FC } from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { iSpecialOffersProps } from '../../../../types/mainPageTypes'
import Card from '../../../UI/Card'

import s from './SpecialOffers.module.sass'
import IconsSVG from '../../../UI/IconsSVG'

const SpecialOffers: FC<iSpecialOffersProps> = ({ title, items, arrows }) => {
	const [left, right] = arrows

	return (
		<section className={s.wrapper}>
			<div className='container'>
				<h4 className='title'>{title}</h4>
				<Swiper
					modules={[Navigation]}
					spaceBetween={15}
					navigation={{ prevEl: `.${left}`, nextEl: `.${right}` }}
					breakpoints={{
						320: { slidesPerView: 1 },
						426: { slidesPerView: 2 },
						768: { slidesPerView: 3 },
						1024: { slidesPerView: 4, spaceBetween: 30, centeredSlides: false },
					}}
				>
					{items.map(item => (
						<SwiperSlide key={item._id} className={s.slide}>
							<Card {...item} />
						</SwiperSlide>
					))}
				</Swiper>
				<span className={`${left} ${s.arrow} ${s.left}`}>
					<IconsSVG id='arrowSpoiler' />
				</span>
				<span className={`${right} ${s.arrow} ${s.right}`}>
					<IconsSVG id='arrowSpoiler' />
				</span>
			</div>
		</section>
	)
}

export default SpecialOffers
