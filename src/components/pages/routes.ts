import { lazy } from 'react';

const MainPage = lazy(() => import('./MainPage'));
const AboutUsPage = lazy(() => import('./AboutUsPage'));
const EventsBlogsPage = lazy(() => import('./EventsBlogsPage'));
const BlogPage = lazy(() => import('./BlogPage'));
const EventPage = lazy(() => import('./EventPage'));
const OrderPage = lazy(() => import('./OrderPage'));
const CartPage = lazy(() => import('./CartPage'));
const ItemPage = lazy(() => import('./ItemPage'));
const CatalogPage = lazy(() => import('./CatalogPage'));

const routes = [
	{ path: '/board-games', element: MainPage },
	{ path: '*', element: MainPage },
	{ path: '/board-games/catalog/*', element: CatalogPage },
	{ path: '/board-games/product/:productId', element: ItemPage },
	{ path: '/board-games/cart', element: CartPage },
	{ path: '/board-games/order', element: OrderPage },
	{ path: '/board-games/about-us', element: AboutUsPage },
	{ path: '/board-games/blog', element: EventsBlogsPage },
	{ path: '/board-games/blog/:blogId', element: BlogPage },
	{ path: '/board-games/events', element: EventsBlogsPage },
	{ path: '/board-games/event/:eventId', element: EventPage },
];

export default routes;
