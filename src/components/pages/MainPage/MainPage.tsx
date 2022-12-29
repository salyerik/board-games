import { FC, useEffect } from 'react'

import useTypedSelector from '../../../hooks/useTypedSelector'
import useAppDispatch from '../../../hooks/useAppDispatch'
import getProductsThunk from '../../../redux/asyncThunks/getProductsThunk'

import TopSlider from './TopSlider'
import Catalog from './Catalog'
import SpecialOffers from './SpecialOffers'
import Events from './Events'
import MoreInteresting from './MoreInteresting'
import AboutUs from './AboutUs'
import Contacts from './Contacts'

const Main: FC = () => {
	const { mainPageItems } = useTypedSelector(({ products }) => products)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getProductsThunk())
	}, [])

	return (
		<>
			<TopSlider />
			<Catalog />
			<SpecialOffers
				items={mainPageItems.filter(item => item.specialOffers)}
				title='Hurry up and buy'
				arrows={['leftStock', 'rightStock']}
			/>
			<SpecialOffers
				items={mainPageItems.filter(item => item.stocks)}
				title='Special Offers'
				arrows={['leftSpecial', 'rightSpecial']}
			/>
			<Events />
			<MoreInteresting />
			<AboutUs />
			<Contacts />
		</>
	)
}

export default Main
