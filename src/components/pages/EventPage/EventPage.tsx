import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getData } from '../../../server/getEventsPageData'
import { iEvent } from '../../../types/eventsTypes'

import EventAside from './EventAside'
import EventContent from './EventContent'
import EventBottom from './EventBottom'
import EventModal from './EventModal'
import Preloader from '../../UI/Preloader'
import BreadCrumps from '../../UI/BreadCrumps'

import s from './EventPage.module.sass'

const EventPage: FC = () => {
	const { eventId } = useParams()
	const [isModalActive, setModalActive] = useState(false)
	const [links, setLinks] = useState<Array<{ path: string, name: string }>>([])

	const [events, setEvents] = useState<iEvent[]>()
	const [event, setEvent] = useState<iEvent>()

	useEffect(() => {
		getData().then(data => setEvents(data.items))
	}, [])

	useEffect(() => {
		setEvent(events?.find(event => event.id === (!!eventId && +eventId)))
	}, [events, eventId])

	useEffect(() => {
		window.scroll(0, 0)
		setLinks([
			{ path: '/', name: 'Главная' },
			{ path: '/events', name: 'Мероприятия' },
			{ path: `/events/${eventId}`, name: `${event?.title}` },
		])
	}, [event])

	useEffect(() => {
		if (isModalActive) {
			document.body.classList.add('lock')
		} else if (!isModalActive) {
			document.body.classList.remove('lock')
		}
	}, [isModalActive])

	function handleModalActive() {
		setModalActive(!isModalActive)
	}

	if (!events) {
		return <Preloader />
	}

	return (
		<section className='container'>
			{event &&
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
					<EventBottom events={events} />
				</>
			}
			{isModalActive &&
				<div onClick={handleModalActive} className={s.modal}>
					<div className='closeBtn'>&times;</div>
					<EventModal setModalActive={setModalActive} />
				</div>
			}
		</section>
	)
}

export default EventPage