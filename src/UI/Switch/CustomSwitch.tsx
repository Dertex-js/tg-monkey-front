import React, { FC, InputHTMLAttributes } from 'react'

import cl from './style.module.scss'

interface CustomSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
	labelTitle: string
}

const CustomSwitch: FC<CustomSwitchProps> = ({
	id,
	labelTitle,
	...defaultProps
}) => (
	<div className={cl.customSwitch}>
		<input id={id} {...defaultProps} type="checkbox" />
		<label htmlFor={id}>{labelTitle}</label>
	</div>
)

export default CustomSwitch
