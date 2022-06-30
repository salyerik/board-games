import { FC } from 'react'

import useTypedSelector from '../../../hooks/useTypedSelector'
import Question from './Question/Question'

const Questions: FC = () => {
	const questions = useTypedSelector(state => state.products.questions)

	return (
		<article>
			{questions.map(item => (
				<Question
					key={item.id}
					text={item.text}
					title={item.title}
					isActive={item.id === 1 ? true : false}
				/>
			))}
		</article>
	)
}

export default Questions