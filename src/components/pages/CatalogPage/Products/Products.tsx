import { FC } from 'react';

import useTypedSelector from '../../../../hooks/useTypedSelector';
import Card from '../../../UI/Card';
import Preloader from '../../../UI/Preloader';

import s from './Products.module.sass';

const Products: FC = () => {
	const { catalogItems } = useTypedSelector(state => state.products);
	const { isLoadingProducts } = useTypedSelector(state => state.filterCategory);

	if (isLoadingProducts) {
		return <Preloader />;
	}

	if (!catalogItems.length) {
		return (
			<div className={s.notFoundItem}>
				<div>
					<span>No products found</span>
					Try changing
					<br />
					filtering or category
				</div>
			</div>
		);
	}

	return (
		<section className={s.flex}>
			{catalogItems.map(item => (
				<div key={item._id} className={s.item}>
					<Card {...item} />
				</div>
			))}
		</section>
	);
};

export default Products;
