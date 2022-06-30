import { FC, useState } from 'react'
import cn from 'classnames'

import { iQuestion } from '../../../../types/productsType'

import s from './Question.module.sass'
import IconsSVG from '../../IconsSVG'

const Question: FC<iQuestion> = ({ title, text, isActive }) => {
	const [isSpoilerActive, setSpoilerActive] = useState(isActive)

	const handleSpoilerClick = () => {
		setSpoilerActive(!isSpoilerActive)
	}

	return (
		<section className={s.wrapper}>
			<h5 onClick={handleSpoilerClick}
				className={cn(s.title, { [s.title_active]: isSpoilerActive })}>
				<span>{title}</span>
				<IconsSVG id='arrowSpoiler' />
			</h5>
			{isSpoilerActive &&
				<div className={s.text}>{text}</div>}
		</section>
	)
}

export default Question