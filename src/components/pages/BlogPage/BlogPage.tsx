import { useParams } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'

import useTypedSelector from '../../../hooks/useTypedSelector'
import { iBlog } from '../../../types/blogTypes'
import { iBreadLink } from '../../../types/commonTypes'

import BreadCrumps from '../../UI/BreadCrumps'
import Card from '../../UI/Card'
import ItemInfoCard from '../../UI/ItemInfoCard'

import s from './BlogPage.module.sass'

const BlogPage: FC = () => {
	const { blogId } = useParams()
	const [links, setLinks] = useState<iBreadLink[]>([])
	const [blog, setBlog] = useState<iBlog>()
	const { mainPageItems } = useTypedSelector(({ products }) => products)
	const { blogPage } = useTypedSelector(state => state.common)

	useEffect(() => {
		setBlog(blogPage.items.find(blog => blog.id === (!!blogId && +blogId)))
	}, [blogPage, blogId])

	useEffect(() => {
		window.scroll(0, 0)
		if (blogPage) {
			setLinks([
				{ path: '/board-games/blog', name: 'Blog' },
				{ name: `${blog?.linkName}` }
			])
		}
	}, [blog])

	return (
		<section className={'container' + ' ' + s.wrapper}>
			<BreadCrumps links={links} />
			{blog &&
				<div key={blog.id}>
					<div className='title'>{blog.title}</div>
					<div className={s.data}>{blog.date}</div>
					<div className={s.mainImg}>
						<img src={blog.img} alt={blog.linkName} />
					</div>
					<div className={s.text + ' ' + s.text_top}>{blog.text}</div>
				</div>
			}
			<div className={s.texts}>
				<div className={s.textTitle}>
          Imperial Navy (The Imperial Navy)
				</div>
				{blogPage.texts.map(text => (
					<div key={text.id} className={s.textContent}>
						<div className={s.textLabel}>{text.label}</div>
						<div className={s.text}>{text.text}</div>
					</div>
				))}
			</div>
			<div className={s.itemFlex}>
				{blogPage.interesting.map(item => (
					<div key={item.id} className={s.flex}>
						<div className={s.content}>
							<div className={s.itemTitle}>{item.title}</div>
							<div className={s.text}>{item.text}</div>
						</div>
						<div className={s.img}>
							<img src={item.img} alt={item.img} />
						</div>
					</div>
				))}
			</div>
			<div className={s.itemTitle}>Read more</div>
			<div className={s.bottomFlex}>
				{blogPage.learnMore.map(item => (
					<ItemInfoCard
						key={item.id}
						link={`/board-games/blog/${item.id}`}
						img={item.img}
						title={item.title}
						text={item.text}
					/>
				))}
			</div>
			<div className={s.itemTitle}>Recommended for you</div>
			<div className={s.recommendations}>
				{mainPageItems.slice(0, 4).map(item => (
					<div key={item.id} className={s.recommendationItem}>
						<Card {...item} />
					</div>
				))}
			</div>
		</section>
	)
}

export default BlogPage