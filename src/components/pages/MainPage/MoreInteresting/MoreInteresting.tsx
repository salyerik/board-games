import { FC } from 'react'

import useTypedSelector from '../../../../hooks/useTypedSelector'
import ItemInfoCard from '../../../UI/ItemInfoCard'

import s from './MoreInteresting.module.sass'

const MoreInteresting: FC = () => {
	const { blogPage } = useTypedSelector(state => state.common)

	return (
		<section className='container'>
			<h4 className='title'>Больше интересной информации</h4>
			<div className={s.flex}>
				{blogPage.items.filter(blog => blog.id <= 3).map(blog => (
					<ItemInfoCard
						key={blog.id}
						link={`/blog/${blog.id}`}
						img={blog.img}
						text={blog.label}
						title={blog.title}
					/>
				))}
			</div>
		</section>
	)
}

export default MoreInteresting