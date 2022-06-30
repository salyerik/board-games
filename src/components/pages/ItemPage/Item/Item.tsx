import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getProduct } from '../../../../server/getProducts'
import { iCardProduct } from '../../../../types/commonTypes'

import ItemImages from './ItemImages'
import ItemTabs from './ItemTabs'
import Card from '../../../UI/Card'
import BreadCrumps from '../../../UI/BreadCrumps'
import Preloader from '../../../UI/Preloader'

import s from './Item.module.sass'

const Item: FC = () => {
	const [item, setItem] = useState<iCardProduct>()
	const { productId } = useParams()
	const [links, setLinks] = useState<{
		name: string, path: string
	}[]>([])

	useEffect(() => {
		if (productId) {
			getProduct(productId).then(data => setItem(data))
			window.scrollTo(0, 0)
		}
	}, [productId])

	useEffect(() => {
		if (item) {
			setLinks([
				{ name: 'Главная', path: '/' },
				{ name: 'Каталог', path: '/catalog' },
				{ name: 'Настольные игры', path: '/catalog/board-games' },
				{ name: item.name, path: `/catalog/board-games/${item.id}` }
			])
		}
	}, [item])

	if (!item) {
		return <Preloader />
	}

	return (
		<>
			<BreadCrumps links={links} />
			<h3 className={s.title}>{item.name}</h3>
			<div className={s.wrapper}>
				<div className={s.content}>
					<ItemImages img={item.img} />
					<ItemTabs item={item} />
				</div>
				<aside className={s.aside}>
					<Card {...item} isProductPage />
					<div className={s.label}>С этим товаром покупают</div>
					<div className={s.card}>
						<Card {...item} />
					</div>
				</aside>
			</div>
		</>
	)
}

export default Item