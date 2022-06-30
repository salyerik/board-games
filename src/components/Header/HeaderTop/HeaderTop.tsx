import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import { CommonContext } from '../../../App'
import { toggleActiveMenu } from '../../../redux/slices/headerSlice'
import useAppDispatch from '../../../hooks/useAppDispatch'
import useTypedSelector from '../../../hooks/useTypedSelector'
import LogModal from './LogModal'
import Search from './Search'

import s from './HeaderTop.module.sass'
import IconsSVG from '../../UI/IconsSVG'

const HeaderTop: FC = () => {
	const dispatch = useAppDispatch()
	const [isModalActive, setModalActive] = useState<boolean>(false)
	const isMenuActive = useTypedSelector(({ header }) => header.isMenuActive)
	const { logo, humanIcon, cart, phone, search } = useTypedSelector(
		({ header }) => header.images
	)
	const totalQuantity = useTypedSelector(({ cartPage }) => cartPage.totalQuantity)

	useEffect(() => {
		if (!isModalActive && !isMenuActive) {
			document.body.classList.remove('lock')
		} else if (isModalActive || isMenuActive) {
			document.body.classList.add('lock')
		}
	}, [isModalActive, isMenuActive])

	function handleMenu() {
		dispatch(toggleActiveMenu())
	}

	function handleModalActive() {
		setModalActive(!isModalActive)
	}

	return (
		<CommonContext.Consumer>{value => (
			<section className={s.headerTop}>
				{isModalActive &&
					<div className={s.modalWrapper} onClick={handleModalActive}>
						<div className='closeBtn'>&times;</div>
						<LogModal />
					</div>}
				<div className="container">
					<div className={s.topFlex}>
						<div onClick={handleMenu} className={cn(s.menuBurger, {
							[s.menuBurger__active]: isMenuActive
						})}>
							<span></span>
						</div>
						<Link to="/" className={s.logo}>
							<img src={logo} alt="Logo" />
						</Link>
						<Search search={search} />
						{value &&
							<a href={value.phoneNumber.path} className={s.number}>
								<IconsSVG id={phone} />
								<span>{value.phoneNumber.text}</span>
							</a>
						}
						<div className={s.icons}>
							<button className={s.loginIcon} type='button'
								onClick={handleModalActive}>
								<IconsSVG id={humanIcon} />
							</button>
							<Link to={'/cart'} className={s.cartIcon}>
								<IconsSVG id={cart} />
								<span className={cn(s.cartCount, {
									[s.cartCount_active]: totalQuantity
								})}>
									{totalQuantity}
								</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		)}
		</CommonContext.Consumer>
	)
}

export default HeaderTop