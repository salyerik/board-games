import { FC } from 'react';
import cn from 'classnames';

import {
	setAge,
	toggleAgeSpoiler,
} from '../../../../../store/slices/filter-slice';
import useTypedSelector from '../../../../../hooks/useTypedSelector';
import useAppDispatch from '../../../../../hooks/useAppDispatch';

import s from './AgeFilter.module.sass';
import IconsSVG from '../../../../UI/IconsSVG';

const AgeFilter: FC = () => {
	const dispatch = useAppDispatch();
	const { ageItems, selectedAge, isSpoilerActive } = useTypedSelector(
		({ filterCategory }) => filterCategory,
	);

	function handleVisibleAgeFilter() {
		dispatch(toggleAgeSpoiler());
	}
	function ageSelectHandle(e: React.ChangeEvent<HTMLInputElement>) {
		dispatch(setAge(e.target.value));
	}

	return (
		<section className={'asideCategoryWrapper'}>
			<div
				onClick={handleVisibleAgeFilter}
				className={cn('asideCategoryTitle', {
					asideCategoryTitle_active: isSpoilerActive.ageFilter,
				})}>
				<span>Ages</span>
				<IconsSVG id='arrowSpoiler' />
			</div>
			{isSpoilerActive.ageFilter && (
				<div className={s.checkboxes}>
					{ageItems.map(item => (
						<label key={item.value}>
							<input
								onChange={ageSelectHandle}
								value={item.value}
								type='radio'
								name='age'
								className='checkboxInput'
								checked={selectedAge === item.value}
							/>
							<span>
								{item.value !== '' && 'from'} {item.name}{' '}
								{item.value !== '' && 'years'}
							</span>
						</label>
					))}
				</div>
			)}
		</section>
	);
};

export default AgeFilter;
