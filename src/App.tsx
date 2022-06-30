import React, { Suspense, useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { getProducts } from "./server/getProducts"
import getData from "./server/getCommonData"
import { getItems } from "./redux/slices/productsSlice"
import { setCartState } from "./redux/slices/cartPageSlice"
import { toggleLoadingProducts, setTotalItem } from "./redux/slices/filterCategorySlice"
import useTypedSelector from "./hooks/useTypedSelector"
import useAppDispatch from "./hooks/useAppDispatch"
import { iCommonState } from "./types/commonTypes"

import Header from "./components/Header"
import Footer from "./components/Footer"
import routes from "./components/pages/routes"
import Preloader from "./components/UI/Preloader"

export const CommonContext = React.createContext<iCommonState | null>(null)

function App() {
	const dispatch = useAppDispatch()
	const {
		isOnlyStocked, price, selectedAge, players, category, subCategory,
		sortPrice, page, pageLimit
	} = useTypedSelector(({ filterCategory }) => filterCategory)
	const fromPrice = price.from
	const toPrice = price.to
	const fromPlayers = players.from
	const toPlayers = players.to
	const cartPage = useTypedSelector(({ cartPage }) => cartPage)
	const [commonData, setCommonData] = useState<iCommonState>()

	useEffect(() => {
		const cartState = localStorage.getItem('cartState')
		if (cartState) {
			dispatch(setCartState(JSON.parse(cartState)))
		}
		getData().then(data => setCommonData(data))
	}, [])

	useEffect(() => {
		localStorage.setItem('cartState', JSON.stringify(cartPage))
	}, [cartPage])

	useEffect(() => {
		dispatch(toggleLoadingProducts())
		getProducts({
			isOnlyStocked, fromPrice, toPrice, selectedAge, fromPlayers, toPlayers,
			category, subCategory, sortPrice, page, pageLimit
		}).then(res => {
			dispatch(setTotalItem(+res.headers['x-total-count']))
			dispatch(getItems(res.data))
		}).finally(() => {
			dispatch(toggleLoadingProducts())
		})
	}, [isOnlyStocked, price, selectedAge, players, category, subCategory,
		sortPrice, page, pageLimit])

	if (!commonData) {
		return <Preloader />
	}

	return (
		<BrowserRouter>
			<div className='App'>
				<CommonContext.Provider value={commonData}>
					<Header />
					<div className="content">
						<Suspense fallback={<Preloader />}>
							<Routes>
								{routes.map(route => (
									<Route key={route.path} path={route.path}
										element={<route.element />} />
								))}
							</Routes>
						</Suspense>
					</div>
					<Footer data={commonData} />
				</CommonContext.Provider>
			</div>
		</BrowserRouter>
	)
}

export default App