import { FC, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

import { tCategory } from '../../../../../../../types/filter-type';

import s from './ItemSubCategories.module.sass';
import IconsSVG from '../../../../../../UI/IconsSVG';

const ItemSubCategories: FC<tCategory> = ({ name, path, subCategories }) => {
	const [isCategoryActive, setBoardCategory] = useState(false);
	const params = useParams();

	function resetPage() {
		setBoardCategory(!isCategoryActive);
	}

	return (
		<>
			<Link
				to={path}
				className={cn(
					'asideCategoryTitle',
					'asideCategoryTitle_inner',
					'linkUrl',
					{
						asideCategoryTitle_active: isCategoryActive,
						linkUrl_active: params['*'] === path,
					},
				)}
				onClick={resetPage}>
				<span className={s.subTitle}>{name}</span>
				<IconsSVG id='arrowSpoiler' />
			</Link>
			{isCategoryActive &&
				subCategories &&
				subCategories.map(item => (
					<Link
						key={item.path}
						to={item.path}
						className={cn(s.link, 'linkUrl', {
							linkUrl_active: params['*'] === item.path,
						})}>
						{item.name}
					</Link>
				))}
		</>
	);
};

export default ItemSubCategories;
