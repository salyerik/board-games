import { useParams } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'

import { getData } from '../../../server/getBlogPageData'
import useTypedSelector from '../../../hooks/useTypedSelector'
import { iBlog, iBlogsState } from '../../../types/blogTypes'
import { iBreadLink } from '../../../types/commonTypes'

import BreadCrumps from '../../UI/BreadCrumps'
import Card from '../../UI/Card'
import ItemInfoCard from '../../UI/ItemInfoCard'
import Preloader from '../../UI/Preloader'

import s from './BlogPage.module.sass'

const BlogPage: FC = () => {
	const { blogId } = useParams()
	const [links, setLinks] = useState<iBreadLink[]>([])
	const [data, setData] = useState<iBlogsState>()
	const [blog, setBlog] = useState<iBlog>()
	const items = useTypedSelector(({ products }) => products.items)

	useEffect(() => {
		getData().then(data => setData(data))
	}, [])

	useEffect(() => {
		setBlog(data?.items.find(blog => blog.id === (!!blogId && +blogId)))
	}, [data, blogId])

	useEffect(() => {
		window.scroll(0, 0)
		if (data) {
			setLinks([
				...data.links,
				{ path: `/blog/${blog?.id.toString()}`, name: `${blog?.linkName}` }
			])
		}
	}, [blog])

	if (!data) {
		return <Preloader />
	}

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
					Имперский Военный Флот (The Imperial Navy)
				</div>
				{data.texts.map(text => (
					<div key={text.id} className={s.textContent}>
						<div className={s.textLabel}>{text.label}</div>
						<div className={s.text}>{text.text}</div>
					</div>
				))}
			</div>
			<div className={s.itemFlex}>
				{data.interesting.map(item => (
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
			<div className={s.itemTitle}>Узнайте больше</div>
			<div className={s.bottomFlex}>
				{data.learnMore.map(item => (
					<ItemInfoCard
						key={item.id}
						link={`/blog/${item.id}`}
						img={item.img}
						title={item.title}
						text={item.text}
					/>
				))}
			</div>
			<div className={s.itemTitle}>Рекомендуем для Вас</div>
			<div className={s.recommendations}>
				{items.slice(0, 4).map(item => (
					<div key={item.id} className={s.recommendationItem}>
						<Card {...item} />
					</div>
				))}
			</div>
		</section>
	)
}

export default BlogPage