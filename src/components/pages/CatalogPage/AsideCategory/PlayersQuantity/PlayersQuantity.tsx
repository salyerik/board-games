import { FC, useEffect, useState } from 'react'
import cn from 'classnames'

import { setFromPlayers, setToPlayers, togglePlayersSpoiler } from '../../../../../redux/slices/filterCategorySlice'
import useAppDispatch from '../../../../../hooks/useAppDispatch'
import useTypedSelector from '../../../../../hooks/useTypedSelector'
import useDebounce from '../../../../../hooks/useDebounce'
import RangeSlider from '../../../../UI/RangeSlider'

import s from './PlayersQuantity.module.sass'
import IconsSVG from '../../../../UI/IconsSVG'

const PlayersQuantity: FC = () => {
	const dispatch = useAppDispatch()
	const { players, isSpoilerActive } = useTypedSelector(({ filterCategory }) => filterCategory)
	const handleVisibleStockFilter = () => {
		dispatch(togglePlayersSpoiler())
	}
	const [playersRange, setPlayersRange] = useState({
		from: players.from,
		to: players.to
	})
	const fromPlayersDebounced = useDebounce<string>(playersRange.from)
	const toPlayersDebounced = useDebounce<string>(playersRange.to)

	useEffect(() => {
		setPlayersRange({ from: players.from, to: players.to })
	}, [players])

	useEffect(() => {
		dispatch(setFromPlayers(fromPlayersDebounced))
		dispatch(setToPlayers(toPlayersDebounced))
	}, [fromPlayersDebounced, toPlayersDebounced])

	function handleFromPlayers(e: React.ChangeEvent<HTMLInputElement>) {
		setPlayersRange({
			...playersRange,
			from: e.target.value
		})
	}

	function handleToPlayers(e: React.ChangeEvent<HTMLInputElement>) {
		setPlayersRange({
			...playersRange,
			to: e.target.value
		})
	}

	return (
		<section className={'asideCategoryWrapper'}>
			<div
				onClick={handleVisibleStockFilter}
				className={cn('asideCategoryTitle', {
					asideCategoryTitle_active: isSpoilerActive.playersFilter
				})}>
				<span>Number of players</span>
				<IconsSVG id='arrowSpoiler' />
			</div>
			{isSpoilerActive.playersFilter && (
				<div className={s.wrapperRange}>
					<div className={s.flexPlayers}>
						<div className={s.flexPlayer}>
							<span>From </span>
							<div className={s.quantity}>{players.from}</div>
						</div>
						<div className={s.flexPlayer}>
							<span>To </span>
							<div className={s.quantity}>{players.to}</div>
						</div>
					</div>
					<RangeSlider
						range={players}
						valueRange={playersRange}
						setFromRange={handleFromPlayers}
						setToRange={handleToPlayers}
					/>
				</div>
			)}
		</section>
	)
}

export default PlayersQuantity
