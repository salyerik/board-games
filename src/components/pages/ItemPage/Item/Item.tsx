import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProduct } from '../../../../http/get-products';
import { IBreadLink, ICardProduct } from '../../../../types/common-type';

import ItemImages from './ItemImages';
import ItemTabs from './ItemTabs';
import Card from '../../../UI/Card';
import BreadCrumps from '../../../UI/BreadCrumps';
import Preloader from '../../../UI/Preloader';

import s from './Item.module.sass';

const Item: FC = () => {
	const { productId } = useParams();
	const [item, setItem] = useState<ICardProduct | null | undefined>(undefined);
	const [links, setLinks] = useState<IBreadLink[]>([]);

	useEffect(() => {
		if (productId) {
			setItem(undefined);
			getProduct(productId)
				.then(({ data }) => setItem(data))
				.catch(() => setItem(null));
			window.scrollTo(0, 0);
		}
	}, [productId]);

	useEffect(() => {
		if (item) {
			setLinks([
				{ name: 'Catalog', path: '/board-games/catalog' },
				{ name: item.name },
			]);
		}
	}, [item]);

	if (item === undefined) return <Preloader />;

	if (item === null) {
		return (
			<h3 className={s.title + ' ' + s.title_active}>
				Sorry, the product was not found
			</h3>
		);
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
					<div className={s.label}>Buy with this product</div>
					<div className={s.card}>
						<Card {...item} />
					</div>
				</aside>
			</div>
		</>
	);
};

export default Item;
