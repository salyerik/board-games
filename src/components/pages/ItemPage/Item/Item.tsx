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
	const { productId } = useParams()
	const [item, setItem] = useState<iCardProduct | null | undefined>(undefined)
	const [links, setLinks] = useState<{
		name: string, path: string
	}[]>([])

	useEffect(() => {
		if (productId) {
			setItem(undefined)
			getProduct(productId)
				.then(data => setItem(data))
				.catch(() => setItem(null))
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

	if (item === undefined) return <Preloader />

	if (item === null) {
		return (
			<h3 className={s.title + ' ' + s.title_active}>
				Товар к сожалению не найден
			</h3>
		)
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