import { FC } from 'react';

import { IEventContentProps } from '../../../../types/events-type';

import s from './EventContent.module.sass';

const EventContent: FC<IEventContentProps> = ({ day, img, text }) => {
	return (
		<section className={s.content}>
			<div className={s.data}>{day}</div>
			<div className={s.img}>
				<img src={img} alt={img} />
			</div>
			<div className={s.text}>
				<p>{text}</p>
				<p>
					Ideological considerations of a higher order, as well as the further
					development of various forms of activity allow us to evaluate the
					value of new proposals. Thus the realization of the planned tasks
					requires us to analyze the development model. The task of
					organization, especially the continuous information and propaganda of
					our activities contributes to the preparation and realization of
					essential financial and administrative conditions. We should not
					forget, however, that the further development of the various forms of
					activity plays an important role in the formation of the positions
					taken by the participants with regard to the tasks at hand. Comrades!
					The continued advocacy of our activities plays an important role in
					shaping new proposals.
				</p>
				<p>
					On the other hand, the new model of organizational activity allows
					important tasks for the design of the development model. Likewise, the
					further development of the various forms of activity makes it possible
					to fulfill important assignments in the development of the development
					model. On the other hand, the constant quantitative growth and the
					scope of our activity is largely responsible for the creation of the
					positions taken by the participants in relation to the tasks assigned.
					The importance of these problems is so obvious that the new model of
					organizational activity plays an important role in shaping the
					positions taken by the participants in relation to the tasks at hand.
					On the other hand, the further development of various forms of
					activity plays an important role in shaping new proposals.
				</p>
				<p>
					In this way, the established structure of the organization facilitates
					the training and implementation of mass participation systems.
					Comrades! The framework and place of training is an interesting
					experiment in testing the directions of progressive development. The
					task of the organization, especially the further development of the
					various forms of activity, allows important tasks for the development
					of mass participation systems.
				</p>
				<p>
					Everyday practice shows that the constant quantitative growth and the
					scope of our activity is an interesting experiment in testing future
					directions of development. The varied and rich experience of the
					continuous quantitative growth and our field of activity is a
					significant factor in the creation of further lines of development.
					The daily practice shows that the continuous quantitative growth and
					the scope of our activity entails a process of implementation and
					modernization of significant financial and administrative conditions.
				</p>
			</div>
		</section>
	);
};

export default EventContent;
