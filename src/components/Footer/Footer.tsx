import { FC } from 'react'

import { iCommonState } from '../../types/commonTypes'
import FooterTop from "./FooterTop"
import FooterBottom from "./FooterBottom"

import s from './Footer.module.sass'

const Footer: FC<{ data: iCommonState }> = ({ data }) => {
	return (
		<div className={s.footer}>
			<FooterTop
				phone={data.phoneNumber}
				links={data.footer.links}
				mail={data.mail}
			/>
			<FooterBottom images={data.footer.images} />
		</div>
	)
}

export default Footer