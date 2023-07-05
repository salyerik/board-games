import { FC, useState } from 'react';
import cn from 'classnames';

import { IQuestion } from '../../../../types/products-type';

import s from './Question.module.sass';
import IconsSVG from '../../IconsSVG';

const Question: FC<IQuestion> = ({ title, text, isActive }) => {
	const [isSpoilerActive, setSpoilerActive] = useState(isActive);

	const handleSpoilerClick = () => {
		setSpoilerActive(!isSpoilerActive);
	};

	return (
		<section className={s.wrapper}>
			<div
				onClick={handleSpoilerClick}
				className={cn(s.top, { [s.top_active]: isSpoilerActive })}>
				<span>{title}</span>
				<IconsSVG id='arrowSpoiler' />
			</div>
			{isSpoilerActive && <div className={s.text}>{text}</div>}
		</section>
	);
};

export default Question;
