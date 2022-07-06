import { FC, useState } from 'react'

import useTypedSelector from '../../../../hooks/useTypedSelector'
import ItemInfoCard from '../../../UI/ItemInfoCard'

import s from './Events.module.sass'

const Events: FC = () => {
	const [quantityItems, setQuantityItems] = useState(2)
	const { items } = useTypedSelector(state => state.common.eventsPage)

	function handleQuantityItems() {
		setQuantityItems(quantityItems + 2)
	}

	return (
		<section className='container'>
			<h4 className='title'>Ближайшие мероприятия</h4>
			<div className={s.flex}>
				{items.slice(0, quantityItems).map(event => (
					<ItemInfoCard
						key={event.id}
						link={`/board-games/event/${event.id}`}
						img={event.img}
						text={event.label}
						title={event.title}
						date={event.date}
					/>
				))}
			</div>
			{quantityItems < items.length &&
				<button onClick={handleQuantityItems} className={s.btn}>
					Показать еще
				</button>
			}
		</section>
	)
}

export default Events