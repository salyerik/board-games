import { FC, useEffect, useState } from 'react'

import { getData } from '../../../../server/getBlogPageData'
import { iBlog } from '../../../../types/blogTypes'
import Preloader from '../../../UI/Preloader'
import ItemInfoCard from '../../../UI/ItemInfoCard'

import s from './MoreInteresting.module.sass'

const MoreInteresting: FC = () => {
	const [items, setItems] = useState<iBlog[]>()

	useEffect(() => {
		getData().then(data => setItems(data.items))
	}, [])

	if (!items) {
		return <Preloader />
	}

	const blogs = items.filter(blog => blog.id <= 3)

	return (
		<section className='container'>
			<h4 className='title'>Больше интересной информации</h4>
			<div className={s.flex}>
				{blogs.map(blog => (
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