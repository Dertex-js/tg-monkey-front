import React, { FC, InputHTMLAttributes } from 'react'

import cl from './style.module.scss'

interface CustomCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	labelTitle: string
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({
	id,
	labelTitle,
	...defaultProps
}) => (
	<div className={cl.container}>
		<input id={id} {...defaultProps} type="checkbox" />
		<label htmlFor={id}>{labelTitle}</label>
	</div>
)

export default CustomCheckbox
