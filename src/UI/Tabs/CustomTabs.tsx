import classnames from 'classnames'
import React, { FC } from 'react'
import { NodeElementsId } from 'types'

import cl from './style.module.scss'

interface TabParams {
	id: NodeElementsId
	label?: string | number
}

interface CustomTabsProps {
	selectedId: NodeElementsId
	tabs: TabParams[]
	tabClick: (id: NodeElementsId) => void
}

const CustomTabs: FC<CustomTabsProps> = ({ tabs, selectedId, tabClick }) => (
	<div className={cl.tabs}>
		{tabs &&
			tabs.map((tab) => (
				<div
					className={classnames([cl.tab], {
						[cl.tabSelected]: tab.id === selectedId
					})}
					key={tab.id}
					onClick={() => tabClick(tab.id)}
				>
					<p>{tab.label}</p>
				</div>
			))}
	</div>
)

export default CustomTabs
