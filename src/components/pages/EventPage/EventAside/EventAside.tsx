import { FC } from 'react';

import { EventAsideProps } from '../../../../types/events-type';

import s from './EventAside.module.sass';

const EventAside: FC<EventAsideProps> = ({
	handleModalActive,
	price,
	placeLeft,
	date,
}) => {
	return (
		<aside className={s.aside}>
			<div className={s.asideLabel}>Hurry up and register</div>
			<div className={s.params}>
				<span className={s.key}>Cost:</span>
				<span className={s.value}>{price}$</span>
			</div>
			<div className={s.params}>
				<span className={s.key}>Remains:</span>
				<span className={s.value}>{placeLeft} places</span>
			</div>
			<div className={s.params}>
				<span className={s.key}>Date:</span>
				<span className={s.value}>{date.day}</span>
			</div>
			<div className={s.params}>
				<span className={s.key}>Time:</span>
				<span className={s.value}>{date.time}</span>
			</div>
			<button className={s.btn} onClick={handleModalActive}>
				Submit a request
			</button>
		</aside>
	);
};

export default EventAside;
