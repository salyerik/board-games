import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { findItem } from '../../../../http/get-products';
import { setSearchedItems } from '../../../../store/slices/header-slice';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import useDebounce from '../../../../hooks/useDebounce';
import { ISearchedItem } from '../../../../types/header-type';

import s from './Search.module.sass';
import IconsSVG from '../../../UI/IconsSVG';

const Search: FC<{ search: string }> = ({ search }) => {
	const dispatch = useAppDispatch();
	const [inputValue, setInputValue] = useState('');
	const searchedItems = useTypedSelector(state => state.header.searchedItems);
	const inputValueDebounced = useDebounce<string>(inputValue);

	useEffect(() => {
		if (inputValue.length >= 1) {
			findItem(inputValue).then(({ data }) => {
				const arr: ISearchedItem[] = [];
				data.map(item => {
					arr.push({
						id: item._id,
						name: item.name,
						img: item.img.compressed,
						price: item.price.new,
					});
				});
				dispatch(setSearchedItems(arr));
			});
		} else {
			dispatch(setSearchedItems([]));
		}
	}, [inputValueDebounced.length]);

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(e.target.value);
	}

	function handleLinkClick() {
		setInputValue('');
		dispatch(setSearchedItems([]));
	}

	return (
		<section className={s.wrapper}>
			<label className={s.search}>
				<input
					value={inputValue}
					onChange={handleInputChange}
					className={s.searchInput}
					type='text'
					name='search'
					placeholder='Find a game'
				/>
				<span className={s.searchIcon}>
					<IconsSVG id={search} />
				</span>
			</label>
			{!!searchedItems.length && (
				<div className={s.items}>
					{searchedItems.map(item => (
						<div key={item.id} className={s.itemWrapper}>
							<Link
								onClick={handleLinkClick}
								to={`/board-games/product/${item.id}`}
								className={s.img}>
								<img src={item.img} alt='item.name' />
							</Link>
							<div className={s.content}>
								<Link
									onClick={handleLinkClick}
									to={`/board-games/product/${item.id}`}
									className={s.itemTitle}>
									{item.name}
								</Link>
								<div className={s.itemPrice}>
									<span>Price: </span>
									{item.price}$
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default Search;
