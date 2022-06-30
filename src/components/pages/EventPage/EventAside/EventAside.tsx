import { FC } from 'react'

import { EventAsideProps } from '../../../../types/eventsTypes'

import s from './EventAside.module.sass'

const EventAside: FC<EventAsideProps> = (
	{ handleModalActive, price, placeLeft, date }
) => {
	return (
		<aside className={s.aside}>
			<div className={s.asideLabel}>Успей зарегистрироваться</div>
			<div className={s.params}>
				<span className={s.key}>Стоимость:</span>
				<span className={s.value}>{price}$</span>
			</div>
			<div className={s.params}>
				<span className={s.key}>Осталось:</span>
				<span className={s.value}>{placeLeft} мест</span>
			</div>
			<div className={s.params}>
				<span className={s.key}>Дата:</span>
				<span className={s.value}>{date.day}</span>
			</div>
			<div className={s.params}>
				<span className={s.key}>Время:</span>
				<span className={s.value}>{date.time}</span>
			</div>
			<button className={s.btn} onClick={handleModalActive}>Подать заявку</button>
		</aside>
	)
}

export default EventAside