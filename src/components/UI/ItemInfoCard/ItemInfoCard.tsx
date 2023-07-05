import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IItemInfoCardProps } from '../../../types/common-type';

import s from './ItemInfoCard.module.sass';

const ItemInfoCard: FC<IItemInfoCardProps> = ({
	link,
	img,
	title,
	date,
	text,
	price,
	isActivePage,
}) => (
	<Link
		to={link}
		className={cn(s.itemInfoCard, {
			[s.itemInfoCard_active]: !!isActivePage,
		})}>
		<img src={img} alt={title} />
		<div className={s.content}>
			<div className={s.title}>
				<span>{title}</span>
				{date && (
					<>
						<span>{date.day}</span>
						<span>{date.time}</span>
					</>
				)}
			</div>
			<div className={s.bottomFlex}>
				<span className={s.text}>{text}</span>
				{price && <span className={s.price}>{price}$</span>}
			</div>
		</div>
	</Link>
);

export default ItemInfoCard;
