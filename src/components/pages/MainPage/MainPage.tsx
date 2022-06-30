import React, { FC, useEffect, useState } from 'react'

import getData from '../../../server/getMainPageData'
import { setCategory, setPageLimit } from '../../../redux/slices/filterCategorySlice'
import useTypedSelector from '../../../hooks/useTypedSelector'
import useAppDispatch from '../../../hooks/useAppDispatch'
import { iMainPageState } from '../../../types/mainPageTypes'

import TopSlider from './TopSlider'
import Catalog from './Catalog'
import SpecialOffers from './SpecialOffers'
import Events from './Events'
import MoreInteresting from './MoreInteresting'
import AboutUs from './AboutUs'
import Contacts from './Contacts'
import Preloader from '../../UI/Preloader'

export const MainPageContext = React.createContext<iMainPageState | null>(null)

const Main: FC = () => {
	const dispatch = useAppDispatch()
	const items = useTypedSelector(({ products }) => products.items)
	const [data, setData] = useState<iMainPageState>()

	useEffect(() => {
		dispatch(setPageLimit(22))
		dispatch(setCategory(''))
		window.scrollTo(0, 0)
		getData().then(data => setData(data))
	}, [])

	if (!data) {
		return <Preloader />
	}

	return (
		<MainPageContext.Provider value={data}>
			<TopSlider />
			<Catalog />
			<SpecialOffers
				items={items.length ? items.filter(item => item.specialOffers) : []}
				title='Успей купить'
				arrows={['leftStock', 'rightStock']}
			/>
			<SpecialOffers
				items={items.length ? items.filter(item => item.stocks) : []}
				title='Специальные предложения'
				arrows={['leftSpecial', 'rightSpecial']}
			/>
			<Events />
			<MoreInteresting />
			<AboutUs />
			<Contacts />
		</MainPageContext.Provider>
	)
}

export default Main