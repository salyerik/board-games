import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'

import useTypedSelector from '../../../../hooks/useTypedSelector'

import s from './TopSlider.module.sass'
import IconsSVG from '../../../UI/IconsSVG'

const TopSlider: FC = () => {
	const { slides, arrow } = useTypedSelector(state => state.common.mainPage)

	return (
		<section className={s.container}>
			<Swiper
				modules={[Autoplay, Navigation]}
				spaceBetween={8}
				centeredSlides
				loop
				navigation={{ prevEl: '.prevSlide', nextEl: '.nextSlide', }}
				breakpoints={{ 320: { slidesPerView: 1 }, 768: { slidesPerView: 1.5 } }}
				autoplay={{ delay: 2500 }}
			>
				{slides.map(slide => (
					<SwiperSlide key={slide.id}>
						<div className={s.slide}>
							<div className={s.flex}>
								<div className={s.text}>
									<span className={s.subTitle}>{slide.subTitle}</span>
									<h4 className={s.title}>{slide.title}</h4>
								</div>
								<Link to={`/board-games/blog/${slide.id}`} className={s.btn}>
									More
								</Link>
							</div>
							<img className={s.img} src={slide.image} alt="" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<span className={s.prev + ' ' + 'prevSlide'}>
				<IconsSVG id={arrow} />
			</span>
			<span className={s.next + ' ' + 'nextSlide'}>
				<IconsSVG id={arrow} />
			</span>
		</section>
	)
}

export default TopSlider