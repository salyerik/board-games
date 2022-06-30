import { FC } from 'react'
import { Link } from 'react-router-dom'

import { CommonContext } from '../../../../App'
import Preloader from '../../../UI/Preloader'

import s from './Catalog.module.sass'

const Catalog: FC = () => (
	<CommonContext.Consumer>{value => {
		if (!value) {
			return <Preloader />
		}
		return (
			<section className='container'>
				<Link to='/catalog' className='title'>Каталог</Link>
				<div className={s.grid}>
					{value.catalogs.map(catalog => (
						<Link to={catalog.path} key={catalog.id} className={s.item}>
							<img src={catalog.img} alt={catalog.name} />
							<h6 className={s.name}>{catalog.name}</h6>
						</Link>
					))}
				</div>
			</section>
		)
	}}
	</CommonContext.Consumer>
)

export default Catalog