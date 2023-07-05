import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import {
	setFromPrice,
	setToPrice,
	toggleOnlyStocked,
	togglePriceSpoiler,
} from '../../../../../store/slices/filter-slice';
import useAppDispatch from '../../../../../hooks/useAppDispatch';
import useTypedSelector from '../../../../../hooks/useTypedSelector';
import useDebounce from '../../../../../hooks/useDebounce';
import RangeSlider from '../../../../UI/RangeSlider';

import s from './PriceFilter.module.sass';
import IconsSVG from '../../../../UI/IconsSVG';

const PriceFilter: FC = () => {
	const dispatch = useAppDispatch();
	const { price, isOnlyStocked, isSpoilerActive } = useTypedSelector(
		({ filterCategory }) => filterCategory,
	);
	const [valueRange, setValueRange] = useState({
		from: price.from,
		to: price.to,
	});
	const fromPriceDebounced = useDebounce<string>(valueRange.from);
	const toPriceDebounced = useDebounce<string>(valueRange.to);

	useEffect(() => {
		setValueRange({ from: price.from, to: price.to });
	}, [price]);

	useEffect(() => {
		dispatch(setFromPrice(fromPriceDebounced));
		dispatch(setToPrice(toPriceDebounced));
	}, [fromPriceDebounced, toPriceDebounced]);

	function handleVisiblePriceFilter() {
		dispatch(togglePriceSpoiler());
	}
	function handleOnlyStocked() {
		dispatch(toggleOnlyStocked());
	}
	function handleFromPrice(e: React.ChangeEvent<HTMLInputElement>) {
		setValueRange({
			...valueRange,
			from: e.target.value,
		});
	}
	function handleToPrice(e: React.ChangeEvent<HTMLInputElement>) {
		setValueRange({
			...valueRange,
			to: e.target.value,
		});
	}

	return (
		<section className={'asideCategoryWrapper'}>
			<div
				onClick={handleVisiblePriceFilter}
				className={cn('asideCategoryTitle', {
					asideCategoryTitle_active: isSpoilerActive.priceFilter,
				})}>
				<span>Price</span>
				<IconsSVG id='arrowSpoiler' />
			</div>
			{isSpoilerActive.priceFilter && (
				<>
					<div className={s.pricesFlex}>
						<label className={s.priceLabel}>
							<span>From</span>
							<input
								onChange={handleFromPrice}
								value={valueRange.from}
								type='number'
								name='fromPrice'
							/>
						</label>
						<label className={s.priceLabel}>
							<span>To</span>
							<input
								onChange={handleToPrice}
								value={valueRange.to}
								type='number'
								name='toPrice'
							/>
						</label>
					</div>
					<RangeSlider
						setFromRange={handleFromPrice}
						setToRange={handleToPrice}
						range={price}
						valueRange={valueRange}
					/>
					<label className={s.checkboxLabel}>
						<input
							className='checkboxInput'
							onChange={handleOnlyStocked}
							checked={isOnlyStocked}
							type='checkbox'
						/>
						<span>Only with a discount</span>
					</label>
				</>
			)}
		</section>
	);
};

export default PriceFilter;
