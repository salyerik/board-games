import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { CommonContext } from '../../../App'
import useTypedSelector from '../../../hooks/useTypedSelector'
import { iFooterTop } from '../../../types/footerTypes'
import CallOrderModal from './CallOrderModal'
import Preloader from '../../UI/Preloader'
import SocialNets from '../../UI/SocialNets'

import s from './FooterTop.module.sass'

const FooterTop = ({ links, mail, phone }: iFooterTop) => {
	const images = useTypedSelector(({ header }) => header.images)
	const [isModalActive, setModalActive] = useState<boolean>(false)

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

	return (
		<CommonContext.Consumer>{value => {
			if (!value) {
				return <Preloader />
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
							<Link to='/' className={s.logo}>
								<img src={images.logo} alt="logo" />
							</Link>
							<span className={s.text}>г. Сан-Франциско<br />
								Малый Дровяной переулок №6</span>
						</div>
						<div className={s.middle}>
							<div className={s.catalog}>
								<Link to={'/catalog'} className={s.catalogTitle}>Каталог</Link>
								<ul className={s.catalogList}>
									{value.catalogs.map(catalog => (
										<li key={catalog.id} className={s.catalogLink}>
											<Link to={catalog.path}>{catalog.name}</Link>
										</li>
									))}
								</ul>
							</div>
							<ul className={s.links}>
								{links.map(link => (
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
								<a className={s.contact} href={phone.path}>
									{phone.text}
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
		}}
		</CommonContext.Consumer>
	)
}

export default FooterTop