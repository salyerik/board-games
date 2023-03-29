import { lazy } from 'react'

const MainPage = lazy(() => import('./MainPage'))
const AboutUsPage = lazy(() => import('./AboutUsPage'))
const EventsBlogsPage = lazy(() => import('./EventsBlogsPage'))
const BlogPage = lazy(() => import('./BlogPage'))
const EventPage = lazy(() => import('./EventPage'))
const OrderPage = lazy(() => import('./OrderPage'))
const CartPage = lazy(() => import('./CartPage'))
const ItemPage = lazy(() => import('./ItemPage'))
const CatalogPage = lazy(() => import('./CatalogPage'))

const routes = [
	{ path: '/boardGames', element: MainPage },
	{ path: '/boardGames/catalog/*', element: CatalogPage },
	{ path: '/boardGames/product/:productId', element: ItemPage },
	{ path: '/boardGames/cart', element: CartPage },
	{ path: '/boardGames/order', element: OrderPage },
	{ path: '/boardGames/about-us', element: AboutUsPage },
	{ path: '/boardGames/blog', element: EventsBlogsPage },
	{ path: '/boardGames/blog/:blogId', element: BlogPage },
	{ path: '/boardGames/events', element: EventsBlogsPage },
	{ path: '/boardGames/event/:eventId', element: EventPage }
]

export default routes
