import { FC, useEffect, useState } from 'react'

import { getData } from '../../../../server/getEventsPageData'
import { iEvent } from '../../../../types/eventsTypes'
import Preloader from '../../../UI/Preloader'
import ItemInfoCard from '../../../UI/ItemInfoCard'

import s from './Events.module.sass'

const Events: FC = () => {
	const [quantityItems, setQuantityItems] = useState(2)
	const [events, setEvents] = useState<iEvent[]>()

	useEffect(() => {
		getData().then(data => setEvents(data.items))
	}, [])

	function handleQuantityItems() {
		setQuantityItems(quantityItems + 2)
	}

	if (!events) {
		return <Preloader />
	}

	return (
		<section className='container'>
			<h4 className='title'>Ближайшие мероприятия</h4>
			<div className={s.flex}>
				{events.slice(0, quantityItems).map(event => (
					<ItemInfoCard
						key={event.id}
						link={`/event/${event.id}`}
						img={event.img}
						text={event.label}
						title={event.title}
						date={event.date}
					/>
				))}
			</div>
			{quantityItems < events.length &&
				<button onClick={handleQuantityItems} className={s.btn}>
					Показать еще
				</button>
			}
		</section>
	)
}

export default Events