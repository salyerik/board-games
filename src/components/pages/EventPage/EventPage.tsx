import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useTypedSelector from '../../../hooks/useTypedSelector';
import { IEvent } from '../../../types/events-type';

import EventAside from './EventAside';
import EventContent from './EventContent';
import EventBottom from './EventBottom';
import EventModal from './EventModal';
import BreadCrumps from '../../UI/BreadCrumps';

import s from './EventPage.module.sass';
import { IBreadLink } from '../../../types/common-type';

const EventPage: FC = () => {
	const { eventId } = useParams();
	const [isModalActive, setModalActive] = useState(false);
	const [links, setLinks] = useState<Array<IBreadLink>>([]);
	const [event, setEvent] = useState<IEvent>();
	const { items } = useTypedSelector(state => state.common.eventsPage);

	useEffect(() => {
		setEvent(items?.find(event => event.id === (!!eventId && +eventId)));
	}, [items, eventId]);

	useEffect(() => {
		window.scroll(0, 0);
		setLinks([
			{ path: '/board-games/events', name: 'Events' },
			{ name: `${event?.title}` },
		]);
	}, [event]);

	useEffect(() => {
		if (isModalActive) {
			document.body.classList.add('lock');
		} else if (!isModalActive) {
			document.body.classList.remove('lock');
		}
	}, [isModalActive]);

	function handleModalActive() {
		setModalActive(!isModalActive);
	}

	return (
		<section className='container'>
			{event && (
				<>
					<BreadCrumps links={links} />
					<h4 className='title'>{event.title}</h4>
					<div className={s.flex}>
						<EventContent
							day={event.date.day}
							img={event.img}
							text={event.label}
						/>
						<EventAside
							placeLeft={event.placeLeft}
							date={event.date}
							price={event.price}
							handleModalActive={handleModalActive}
						/>
					</div>
					<EventBottom events={items.slice(0, 2)} />
				</>
			)}
			{isModalActive && (
				<div onClick={handleModalActive} className={s.modal}>
					<div className='closeBtn'>&times;</div>
					<EventModal setModalActive={setModalActive} />
				</div>
			)}
		</section>
	);
};

export default EventPage;
