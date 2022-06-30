import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'

import { MainPageContext } from '../MainPage'
import Preloader from '../../../UI/Preloader'

import s from './TopSlider.module.sass'
import IconsSVG from '../../../UI/IconsSVG'

const TopSlider: FC = () => (
	<MainPageContext.Consumer>{value => {
		if (!value) {
			return <Preloader />
		}
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
					{value.slides.map(slide => (
						<SwiperSlide key={slide.id}>
							<div className={s.slide}>
								<div className={s.flex}>
									<div className={s.text}>
										<span className={s.subTitle}>{slide.subTitle}</span>
										<h4 className={s.title}>{slide.title}</h4>
									</div>
									<Link to={`/blog/${slide.id}`} className={s.btn}>
										Подробнее
									</Link>
								</div>
								<img className={s.img} src={slide.image} alt="" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<span className={s.prev + ' ' + 'prevSlide'}>
					<IconsSVG id={value.arrow} />
				</span>
				<span className={s.next + ' ' + 'nextSlide'}>
					<IconsSVG id={value.arrow} />
				</span>
			</section>
		)
	}}
	</MainPageContext.Consumer>
)

export default TopSlider