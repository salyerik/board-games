import { lazy } from "react"

const MainPage = lazy(() => import("./MainPage"))
const AboutUsPage = lazy(() => import("./AboutUsPage"))
const EventsBlogsPage = lazy(() => import("./EventsBlogsPage"))
const BlogPage = lazy(() => import("./BlogPage"))
const EventPage = lazy(() => import("./EventPage"))
const OrderPage = lazy(() => import("./OrderPage"))
const CartPage = lazy(() => import("./CartPage"))
const ItemPage = lazy(() => import("./ItemPage"))
const CatalogPage = lazy(() => import("./CatalogPage"))

const routes = [
	{ path: "/", element: MainPage },
	{ path: "/catalog/*", element: CatalogPage },
	{ path: "/product/:productId", element: ItemPage },
	{ path: "/cart", element: CartPage },
	{ path: "/order", element: OrderPage },
	{ path: "/about-us", element: AboutUsPage },
	{ path: "/blog", element: EventsBlogsPage },
	{ path: "/blog/:blogId", element: BlogPage },
	{ path: "/events", element: EventsBlogsPage },
	{ path: "/event/:eventId", element: EventPage },
]

export default routes