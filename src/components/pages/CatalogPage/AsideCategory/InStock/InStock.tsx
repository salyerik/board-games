import { FC, useState } from 'react';
import cn from 'classnames';

import s from './InStock.module.sass';
import IconsSVG from '../../../../UI/IconsSVG';

const InStock: FC = () => {
	const [isStockFilterActive, setIsStockFilterActive] = useState(false);

	const handleVisibleStockFilter = () => {
		setIsStockFilterActive(!isStockFilterActive);
	};

	return (
		<section className={'asideCategoryWrapper'}>
			<div
				onClick={handleVisibleStockFilter}
				className={cn('asideCategoryTitle', {
					asideCategoryTitle_active: isStockFilterActive,
				})}>
				<span>Availability</span>
				<IconsSVG id='arrowSpoiler' />
			</div>
			{isStockFilterActive && (
				<>
					<div className={s.checkboxes}>
						<label>
							<input type='checkbox' className='checkboxInput' />
							<span>in stock</span>
						</label>
						<label>
							<input type='checkbox' className='checkboxInput' />
							<span>on order</span>
						</label>
						<label>
							<input type='checkbox' className='checkboxInput' />
							<span>off</span>
						</label>
					</div>
				</>
			)}
		</section>
	);
};

export default InStock;
