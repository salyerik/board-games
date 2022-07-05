import { FC } from 'react'
import { Link } from 'react-router-dom'

import useTypedSelector from '../../../../hooks/useTypedSelector'

import s from './Catalog.module.sass'

const Catalog: FC = () => {
	const { catalogs } = useTypedSelector(state => state.common.commonData)

	return (
		<section className='container'>
			<Link to='/catalog' className='title'>Каталог</Link>
			<div className={s.grid}>
				{catalogs.map(catalog => (
					<Link to={catalog.path} key={catalog.id} className={s.item}>
						<img src={catalog.img} alt={catalog.name} />
						<h6 className={s.name}>{catalog.name}</h6>
					</Link>
				))}
			</div>
		</section>
	)
}

export default Catalog