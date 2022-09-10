import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import useTypedSelector from '../../../hooks/useTypedSelector'
import { iBlogsState } from '../../../types/blogTypes'
import { iEventsPageState } from '../../../types/eventsTypes'

import ItemInfoCard from '../../UI/ItemInfoCard'
import BreadCrumps from '../../UI/BreadCrumps'
import Preloader from '../../UI/Preloader'

import s from './EventsBlogsPage.module.sass'
import IconSvg from '../../UI/IconsSVG'

const EventsBlogsPage: FC = () => {
	const [activeFilter, setFilter] = useState(0)
	const [data, setData] = useState<iEventsPageState | iBlogsState>()
	const { pathname } = useLocation()
	const { blogPage, eventsPage } = useTypedSelector(state => state.common)

	function handleFilter(e: React.ChangeEvent<HTMLSelectElement>) {
		setFilter(+e.target.value)
	}

	useEffect(() => {
		if (pathname.includes('blog')) {
			setData(blogPage)
		}
		if (pathname.includes('events')) {
			setData(eventsPage)
		}
	}, [pathname])

	if (!data) {
		return <Preloader />
	}

	return (
		<section className='container'>
			<BreadCrumps text={pathname.includes('blog') ? 'Blog' : 'Events'} />
			<div className={s.topBlock}>
				<h4 className={'title' + ' ' + s.pageTitle}>
					{pathname.includes('blog') ? 'Blog' : 'Events'}
				</h4>
				<div className='select'>
					<select defaultValue={'0'} onChange={handleFilter}>
						{data.filters.map(filter => (
							<option key={filter.id} value={filter.id}>
								{filter.filterText}
							</option>
						))}
					</select>
					<IconSvg id='arrowSpoiler' />
				</div>
			</div>
			<div className={s.flex}>
				{data.items.map(item => {
					if (!activeFilter || item.id === activeFilter) {
						return (
							<ItemInfoCard
								key={item.id}
								link={pathname
									.includes('blog') ?
									`/board-games/blog/${item.id}` :
									`/board-games/event/${item.id}`}
								img={item.img}
								text={item.label}
								title={item.title}
								isActivePage={pathname.includes('blog') ? true : undefined}
							/>
						)
					}
				})}
			</div>
		</section>
	)
}

export default EventsBlogsPage