import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import useTypedSelector from '../../../hooks/useTypedSelector'
import CallOrderModal from './CallOrderModal'
import SocialNets from '../../UI/SocialNets'

import s from './FooterTop.module.sass'

const FooterTop: FC = () => {
	const [isModalActive, setModalActive] = useState<boolean>(false)
	const images = useTypedSelector(({ header }) => header.images)
	const { catalogs } = useTypedSelector(state => state.common.commonData)
	const { footer, mail, phoneNumber } = useTypedSelector(state => state.common.commonData)

	useEffect(() => {
		if (isModalActive) {
			document.body.classList.add('lock')
		} else {
			document.body.classList.remove('lock')
		}
	}, [isModalActive])

	function handleModalActive() {
		setModalActive(false)
	}

	function handleLinkClick() {
		window.scrollTo(0, 0)
	}

	return (
		<section className='container'>
			{isModalActive &&
				<div className={s.modal} onClick={handleModalActive}>
					<span className='closeBtn'>&times;</span>
					<CallOrderModal />
				</div>
			}
			<div className={s.flex}>
				<div className={s.left}>
					<Link to='/board-games' className={s.logo}>
						<img src={images.logo} alt="logo" />
					</Link>
					<span className={s.text}>г. Сан-Франциско<br />
						Малый Дровяной переулок №6</span>
				</div>
				<div className={s.middle}>
					<div className={s.catalog}>
						<Link to={'/board-games/catalog'} className={s.catalogTitle}>Каталог</Link>
						<ul className={s.catalogList}>
							{catalogs.map(catalog => (
								<li
									onClick={handleLinkClick}
									key={catalog.id}
									className={s.catalogLink}
								>
									<Link to={catalog.path}>{catalog.name}</Link>
								</li>
							))}
						</ul>
					</div>
					<ul className={s.links}>
						{footer.links.map(link => (
							<li className={s.link} key={link.path}>
								<a href={link.path}>{link.title}</a>
							</li>
						))}
					</ul>
				</div>
				<div className={s.right}>
					<button className={s.btn} onClick={() => setModalActive(true)}>
						Заказать звонок
					</button>
					<div className={s.contacts}>
						<a className={s.contact} href={phoneNumber.path}>
							{phoneNumber.text}
						</a>
						<a className={s.contact} href={mail.path}>
							{mail.text}
						</a>
					</div>
					<div className={s.socials}><SocialNets /></div>
				</div>
			</div>
		</section>
	)
}

export default FooterTop