import { FC, useEffect, useRef } from 'react'
import s from './RangeSlider.module.sass'

import { iRangeValue } from '../../../types/filterCategoryTypes'

export interface iRangeSlider {
	range: iRangeValue,
	valueRange: { from: string, to: string },
	setFromRange: (e: React.ChangeEvent<HTMLInputElement>) => void,
	setToRange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const RangeSlider: FC<iRangeSlider> = ({
	range, valueRange, setFromRange, setToRange
}) => {
	const progressRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (progressRef.current) {
			progressRef.current.style.left =
				(+valueRange.from / (range.minMaxRange[1] - 1) * 100)
				- (range.minMaxRange[1] < 10 ? 20 : 0) + '%'

			progressRef.current.style.right =
				100 - (+valueRange.to / (range.minMaxRange[1] - 1) * 100)
				+ (range.minMaxRange[1] < 10 ? 20 : 0) + '%'
		}
	}, [valueRange])

	const handleMinRange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (+e.target.value <= +valueRange.to - range.valueGap) {
			setFromRange(e)
		}
	}

	const handleMaxRange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (+e.target.value >= +valueRange.from + range.valueGap) {
			setToRange(e)
		}
	}

	return (
		<div draggable={false} className={s.slider}>
			<div draggable={false} ref={progressRef} className={s.progress}></div>
			<div draggable={false} className={s.rangeInputs}>
				<input type="range" min={range.minMaxRange[0]} max={range.minMaxRange[1]}
					step={range.step} value={valueRange.from === '' ? 0 : valueRange.from}
					onChange={handleMinRange} name='minRange' draggable={false} />
				<input type="range" min={range.minMaxRange[0]} max={range.minMaxRange[1]}
					step={range.step} value={valueRange.to === '' ? 0 : valueRange.to}
					onChange={handleMaxRange} name='maxRange' draggable={false} />
			</div>
		</div>
	)
}

export default RangeSlider