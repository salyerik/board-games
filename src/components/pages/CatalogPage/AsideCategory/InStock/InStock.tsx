import { FC, useState } from 'react'
import cn from 'classnames'

import s from './InStock.module.sass'
import IconsSVG from '../../../../UI/IconsSVG'

const InStock: FC = () => {
	const [isStockFilterActive, setIsStockFilterActive] = useState(false)

	const handleVisibleStockFilter = () => {
		setIsStockFilterActive(!isStockFilterActive)
	}

	return (
		<section className={'asideCategoryWrapper'}>
			<div
				onClick={handleVisibleStockFilter}
				className={cn('asideCategoryTitle', {
					'asideCategoryTitle_active': isStockFilterActive
				})}
			>
				<span>Наличие</span>
				<IconsSVG id='arrowSpoiler' />
			</div>
			{isStockFilterActive && <>
				<div className={s.checkboxes}>
					<label>
						<input type="checkbox" className='checkboxInput' />
						<span>в наличии</span>
					</label>
					<label>
						<input type="checkbox" className='checkboxInput' />
						<span>под заказ</span>
					</label>
					<label>
						<input type="checkbox" className='checkboxInput' />
						<span>нет в наличии</span>
					</label>
				</div>
			</>}
		</section>
	)
}

export default InStock