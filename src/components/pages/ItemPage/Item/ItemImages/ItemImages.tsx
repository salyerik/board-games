import { FC, useEffect, useState } from 'react'
import cn from 'classnames'

import { iCardImages } from '../../../../../types/commonTypes'

import s from './ItemImages.module.sass'

const ItemImages: FC<{ img: iCardImages }> = ({ img }) => {
	const [isModuleActive, setModule] = useState(false)

	useEffect(() => {
		if (isModuleActive) {
			document.body.classList.add('lock')
		} else {
			document.body.classList.remove('lock')
		}
	}, [isModuleActive])

	function handleImgClick() {
		setModule(!isModuleActive)
	}

	return (
		<section className={s.images}>
			<div className={s.left}>
				<div className={s.miniImg}>
					<img src={img.compressed} alt={img.compressed} />
				</div>
				<div className={s.miniImg}>
					<img src={img.compressed} alt={img.compressed} />
				</div>
				<div className={s.miniImg}>
					<img src={img.compressed} alt={img.compressed} />
				</div>
			</div>
			<div onClick={handleImgClick} className={cn(s.right, {
				[s.right_active]: isModuleActive
			})}>
				<span className='closeBtn'>&times;</span>
				<img src={img.original} alt={img.original} />
			</div>
		</section>
	)
}

export default ItemImages