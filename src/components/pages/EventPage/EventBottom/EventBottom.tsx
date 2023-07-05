import { FC } from 'react';
import { IEvent } from '../../../../types/events-type';
import ItemInfoCard from '../../../UI/ItemInfoCard';

import s from './EventBottom.module.sass';

const EventBottom: FC<{ events: IEvent[] }> = ({ events }) => (
	<>
		<h6 className={s.bottomTitle}>Might be interesting.</h6>
		<div className={s.flex}>
			{events.map(event => (
				<ItemInfoCard
					key={event.id}
					link={`/board-games/event/${event.id}`}
					img={event.img}
					text={event.label}
					title={event.title}
					price={event.price}
					date={event.date}
				/>
			))}
		</div>
	</>
);

export default EventBottom;
