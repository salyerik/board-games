import { FC, useState } from 'react'
import cn from 'classnames'

import EnterTab from './EnterTab'
import RegisterTab from './RegisterTab'

import s from './LogModal.module.sass'

const LogModal: FC = () => {
	const [activeTab, setActiveTab] = useState(0)

	function handleActiveTab(tabIndex: number) {
		setActiveTab(tabIndex)
	}

	return (
		<section className={s.content} onClick={(e) => e.stopPropagation()}>
			<div className={s.topLabel}>Login or Register</div>
			<div className={s.tabs}>
				<span onClick={() => handleActiveTab(0)} className={cn(s.tab, {
					[s.tab_active]: !activeTab
				})}>Log in</span>
				<span onClick={() => handleActiveTab(1)} className={cn(s.tab, {
					[s.tab_active]: activeTab === 1
				})}>Registration</span>
			</div>
			{activeTab ? <RegisterTab /> : <EnterTab />}
		</section>
	)
}

export default LogModal