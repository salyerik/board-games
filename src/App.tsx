import { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { getCartLocalStrg } from './store/slices/cart-slice';
import useAppDispatch from './hooks/useAppDispatch';

import Header from './components/Header';
import Footer from './components/Footer';
import routes from './components/pages/routes';
import Preloader from './components/UI/Preloader';

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getCartLocalStrg());
	}, []);

	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<div className='content'>
					<Suspense fallback={<Preloader />}>
						<Routes>
							{routes.map(route => (
								<Route
									key={route.path}
									path={route.path}
									element={<route.element />}
								/>
							))}
						</Routes>
					</Suspense>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
